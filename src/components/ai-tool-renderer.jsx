import { componentRegistry } from "./ai-component-registry";

// Recursive component renderer for nested UI components
const renderComponent = (uiComponent, key) => {
	const Component = componentRegistry[uiComponent.component];

	if (!Component) {
		return (
			<div key={key} className="text-red-400 text-sm p-2 bg-red-500/10 rounded">
				Unknown component: {uiComponent.component}
			</div>
		);
	}

	const hasChildren = uiComponent.children && uiComponent.children.length > 0;

	return (
		<div key={key} className="ui-component">
			<Component {...uiComponent.props}>
				{hasChildren && (
					<div
						className={`flex ${
							uiComponent.layout?.direction === "horizontal"
								? "flex-row"
								: "flex-col"
						} ${
							uiComponent.layout?.align === "start"
								? "items-start"
								: uiComponent.layout?.align === "center"
									? "items-center"
									: uiComponent.layout?.align === "end"
										? "items-end"
										: uiComponent.layout?.align === "between"
											? "justify-between"
											: uiComponent.layout?.align === "around"
												? "justify-around"
												: "items-start"
						}`}
						style={{ gap: `${uiComponent.layout?.gap || 8}px` }}
					>
						{uiComponent.children.map((child, index) =>
							renderComponent(child, `${key}-child-${index}`),
						)}
					</div>
				)}
			</Component>
		</div>
	);
};

// Main tool output renderer
export const ToolOutputRenderer = ({
	toolName,
	state,
	output,
	errorText,
}) => {
	// Map tool names to component types
	const toolToComponentMap = {
		displayWeather: "weather-card",
		generateCalculator: "calculator",
		generateChart: "chart-data",
		generateTodoList: "todo-list",
		generateUIComponent: "", // This can generate any component type
	};

	switch (state) {
		case "input-available":
			return (
				<div className="rounded-2xl border border-[#e4e3d4] bg-[#f6f5ee] p-3 text-sm text-[#091717]">
					<div className="flex items-center gap-2">
						<div className="h-2 w-2 animate-pulse rounded-full bg-[#21808d]"></div>
						<span>Generating dynamic UI...</span>
					</div>
				</div>
			);

		case "output-available":
			if (!output) return null;

			// Handle single component
			if (!Array.isArray(output) && output.component) {
				return (
					<div className="mt-2">
						{renderComponent(output, `tool-${toolName}`)}
					</div>
				);
			}

			// Handle multiple components (array)
			if (Array.isArray(output)) {
				return (
					<div className="mt-2 space-y-3">
						{output.map((component, index) =>
							renderComponent(component, `tool-${toolName}-${index}`),
						)}
					</div>
				);
			}

			return null;

		case "output-error":
			return (
				<div className="rounded-2xl border border-[#f5b5ae] bg-[#fde6e4] p-4 text-sm text-[#621b16]">
					<div className="flex items-start gap-2">
						<span>⚠️</span>
						<div>
							<div className="font-semibold mb-1">UI Generation Error</div>
							<div>
								{errorText ??
									"An error occurred while generating the UI component."}
							</div>
						</div>
					</div>
				</div>
			);

		default:
			return null;
	}
};
