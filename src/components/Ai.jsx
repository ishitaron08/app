import { useChat } from "@ai-sdk/react";
import {
	Conversation,
	ConversationContent,
	ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import { Loader } from "@/components/ai-elements/loader";
import { Message, MessageContent } from "@/components/ai-elements/message";
import {
	PromptInput,
	PromptInputBody,
	PromptInputSubmit,
	PromptInputTextarea,
	PromptInputFooter,
	PromptInputTools,
	PromptInputButton,
} from "@/components/ai-elements/prompt-input";
import { Shimmer } from "@/components/ai-elements/shimmer";
import { Response } from "@/components/response";
import { SquareIcon, ArrowUpRight } from "lucide-react";
import { ToolOutputRenderer } from "@/components/ai-tool-renderer";
import { DefaultChatTransport } from "ai";

function renderMessagePart(part, key) {
	if (part.type === "text") {
		const text = typeof part.text === "string" ? part.text : "";
		return (
			<Response
				key={key}
				className="prose prose-sm max-w-none leading-relaxed text-[#091717] prose-headings:text-[#091717] prose-strong:text-[#091717]"
			>
				{text}
			</Response>
		);
	}

	// Handle tool outputs using the registry-based renderer
	if (part.type?.startsWith("tool-")) {
		const toolName = part.type.replace("tool-", "");
		return (
			<ToolOutputRenderer
				key={key}
				toolName={toolName}
				state={part.state}
				output={part.output}
				errorText={part.errorText}
			/>
		);
	}

	return null;
}

export default function AIPage() {
	const { messages, status, sendMessage, stop, error } = useChat({
		transport: new DefaultChatTransport({
            api: '/api/ai',
        })
	});

	const handlePromptSubmit = ({ text }) => {
		const value = text.trim();
		if (!value) {
			return;
		}
		return sendMessage({ text: value });
	};

	return (
		<div className="relative min-h-screen w-full overflow-hidden bg-[#fbfaf4] text-[#091717]">
			<div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col px-4 pb-12 pt-16 sm:px-6 lg:px-8">
				<div className="flex h-full w-full flex-1 flex-col gap-6">
					{messages.length === 0 && (
						<div className="space-y-2 text-center">
							<h1 className="text-4xl font-medium text-[#091717]" style={{ fontFamily: 'Newsreader, "Times New Roman", serif', fontWeight: 300 }}>AI Assistant</h1>
							<p className="text-base text-[#091717]/60" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
								I can create interactive user interfaces on demand! Just describe what you need.
							</p>
						</div>
					)}

					<section className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-[#e4e3d4] bg-white/40 backdrop-blur shadow-[0_4px_12px_rgba(0,0,0,0.05)]">
						<div className="relative flex flex-1 overflow-hidden rounded-3xl">
							<Conversation className="flex-1">
								<ConversationContent className="gap-6 px-4 py-6 pb-24 sm:px-8">
									{messages.length === 0 && <EmptyState />}

									{messages.map((message) => (
										<Message key={message.id} from={message.role}>
											<MessageContent className="max-w-3xl rounded-2xl bg-white p-4 text-base leading-relaxed text-[#091717] shadow-sm ring-1 ring-[#e4e3d4] group-[.is-user]:bg-[#dff3f5] group-[.is-user]:text-[#091717] group-[.is-user]:shadow-md group-[.is-user]:ring-0">
												{message.parts.map((part, index) => {
													const key = `${message.id}-${index}`;
													return renderMessagePart(part, key);
												})}
											</MessageContent>
										</Message>
									))}

									{status === "submitted" && (
										<div className="flex items-center gap-3 text-sm text-[#091717]/70">
											<Loader className="text-[#091717]/60" />
											<Shimmer className="text-[#091717]/70">
												Thinking through your request…
											</Shimmer>
										</div>
									)}

									{error && (
										<div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
											{error.message}
										</div>
									)}
								</ConversationContent>
								<ConversationScrollButton className="bg-white text-[#091717] border border-[#e4e3d4] hover:bg-[#f6f5ee]" />
							</Conversation>
						</div>
					</section>

					<PromptInput
						onSubmit={handlePromptSubmit}
						className="shadow-[0_24px_40px_rgba(0,0,0,0.08)] border border-[#e4e3d4] bg-white"
					>
						<PromptInputBody className="">
							<PromptInputTextarea className="min-h-16 resize-none border-none bg-transparent px-5 py-4 text-base text-[#091717] placeholder:text-[#091717]/40 focus-visible:ring-0 focus-visible:ring-offset-0" />
						</PromptInputBody>
						<PromptInputFooter className="flex items-center justify-between gap-3 px-3 pb-3">
							<PromptInputTools className="flex flex-1 items-center justify-between text-xs">
								{status === "streaming" ? (
									<PromptInputButton
										aria-label="Stop response"
										className="flex items-center gap-2 text-[#091717]/70 hover:text-[#091717]"
										onClick={stop}
										variant="ghost"
									>
										<SquareIcon className="size-3.5" />
										<span>Stop</span>
									</PromptInputButton>
								) : (
									<span className="text-[#091717]/40" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
										Shift + Enter for newline
									</span>
								)}
							</PromptInputTools>
							<PromptInputSubmit
								className="rounded-full bg-[#091717] px-5 py-2 text-sm font-medium text-[#fbfaf4] hover:bg-[#091717]/90 transition-colors"
								status={status}
								variant="default"
							/>
						</PromptInputFooter>
					</PromptInput>
				</div>
			</div>
		</div>
	);
}

function EmptyState() {
	return (
		<div className="mx-auto w-full max-w-4xl space-y-6 text-sm text-[#091717]/60">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div className="space-y-3">
					<h3 className="text-sm font-medium text-[#21808d] uppercase tracking-wider" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
						Calculations & Data
					</h3>
					<div className="space-y-2">
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Show me a scientific calculator"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Create a chart of sales data"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Make a data table with user information"
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<h3 className="text-sm font-medium text-[#21808d] uppercase tracking-wider" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
						Task Management
					</h3>
					<div className="space-y-2">
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Create a todo list for my project"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Make a progress tracker for goals"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Show me a project task manager"
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<h3 className="text-sm font-medium text-[#21808d] uppercase tracking-wider" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
						Weather & Info
					</h3>
					<div className="space-y-2">
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"What's the weather in Tokyo?"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Show me weather with forecast"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Create a weather dashboard"
						</div>
					</div>
				</div>

				<div className="space-y-3">
					<h3 className="text-sm font-medium text-[#21808d] uppercase tracking-wider" style={{ fontFamily: 'DM Mono, Menlo, monospace' }}>
						Forms & UI
					</h3>
					<div className="space-y-2">
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Make a user registration form"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Create alert notifications"
						</div>
						<div className="rounded-xl border border-[#e4e3d4] bg-white p-3 text-[#091717]/80 transition-colors hover:border-[#21808d]/30 hover:bg-[#f6f5ee] cursor-pointer shadow-sm">
							"Build a button group interface"
						</div>
					</div>
				</div>
			</div>

			<div className="mt-8 p-4 rounded-2xl border border-[#e4e3d4] bg-gradient-to-r from-[#299da9]/10 to-[#21808d]/10">
				<p className="text-center text-[#091717]/80" style={{ fontFamily: 'Space Grotesk, Inter, sans-serif' }}>
					💡 <strong>Pro tip:</strong> Combine requests! Try "Create a dashboard
					with weather, calculator, and todo list"
				</p>
			</div>
		</div>
	);
}
