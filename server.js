import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText, convertToModelMessages } from "ai";
import { tools } from "./src/components/ai-tool-registry.js";
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, 'dist');

const hasDist = fs.existsSync(distPath);

if (hasDist) {
  app.use(express.static(distPath));
}

app.post('/api/ai', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: "Invalid request: messages array required" });
    }

    const nim = createOpenAICompatible({
      name: "nim",
      baseURL: "https://integrate.api.nvidia.com/v1",
      headers: {
        Authorization: `Bearer ${process.env.NIM_API_KEY}`,
      },
    });
    const model = nim.chatModel("moonshotai/kimi-k2-instruct-0905");

    console.log("[AI] Tools being passed:", Object.keys(tools));

    const result = await streamText({
      model,
      system: `You are a dynamic generative UI assistant that can create interactive user interfaces on demand.

You have access to powerful tools that generate dynamic UI components:

1. displayWeather - Generate weather cards and forecasts
2. generateCalculator - Create interactive calculators (basic, scientific, currency)
3. generateChart - Generate data visualization charts (bar, line, pie, area, scatter)
4. generateTodoList - Create interactive todo lists with add/remove functionality
5. generateUIComponent - Generate custom components (alerts, tables, forms, buttons, etc.)

STRATEGY:
- Analyze user requests to determine what UI components would be most helpful
- Use tools proactively when users mention: calculations, data, charts, todos, tables, forms
- For weather requests, use displayWeather with appropriate style
- For data visualization, use generateChart with specific chart types
- For task management, use generateTodoList
- For calculations, use generateCalculator
- Combine multiple tools when building complex interfaces
- Use generateUIComponent for specific UI needs (alerts, forms, etc.)

EXAMPLES:
- "Show me a calculator" → generateCalculator
- "Create a todo list for my project" → generateTodoList  
- "Make a chart of sales data" → generateChart
- "What's the weather in Tokyo?" → displayWeather
- "Show me the weather with forecast" → displayWeather with includeForecast
- "Create a data table" → generateUIComponent with data-table
- "Make a form for user input" → generateUIComponent with form-input

Be creative and combine tools to build rich, interactive interfaces!`,
      messages: convertToModelMessages(messages),
      tools,
      toolChoice: "auto",
      maxToolRoundtrips: 10,
    });

    result.pipeUIMessageStreamToResponse(res);
  } catch (error) {
    console.error("[AI] Error:", error);
    res.status(500).json({ error: "Internal server error", message: error instanceof Error ? error.message : "Unknown error" });
  }
});

if (hasDist) {
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next();
    }
    return res.sendFile(path.join(distPath, 'index.html'));
  });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
