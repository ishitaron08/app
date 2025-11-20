import { useState } from "react";

// Dynamic Component Registry
export const componentRegistry = {
	// Weather Card Component
	"weather-card": ({
		location,
		condition,
		temperature,
		humidity,
		windSpeed,
		style,
	}) => {
		const sizeClasses = {
			simple: "p-3 text-sm",
			detailed: "p-4 text-base",
			mini: "p-2 text-xs",
			forecast: "p-3 text-sm",
		};

		return (
			<div
				className={`rounded-2xl border border-[#e4e3d4] bg-white text-[#091717] shadow-sm ${sizeClasses[style]}`}
			>
				<div className="flex justify-between items-start">
					<div>
						<h3 className="font-semibold mb-1">{location}</h3>
						<p className="text-[#091717]/70">{condition}</p>
					</div>
					<div className="text-right">
						<div className="text-2xl font-bold text-[#0f1916]">{temperature}°C</div>
						{style !== "mini" && (
							<div className="text-xs text-[#091717]/60">
								Wind: {windSpeed}km/h | Humidity: {humidity}%
							</div>
						)}
					</div>
				</div>
				{style === "forecast" && (
					<div className="mt-2 text-xs text-[#091717]/60">
						<i className="mr-1">🌤️</i> Weather forecast data
					</div>
				)}
			</div>
		);
	},

	// Interactive Calculator Component
	calculator: ({ type, buttons, operation }) => {
		const [display, setDisplay] = useState(operation || "0");
		const [history, setHistory] = useState([]);

		const handleButtonClick = (btn) => {
			if (btn === "=") {
				try {
					const result = eval(display.replace(/[^0-9+\-*/().]/g, ""));
					setHistory((h) => [...h, `${display} = ${result}`]);
					setDisplay(String(result));
				} catch {
					setDisplay("Error");
				}
			} else if (btn === "C") {
				setDisplay("0");
			} else {
				setDisplay(display === "0" ? btn : display + btn);
			}
		};

		return (
			<div className="rounded-2xl border border-[#e4e3d4] bg-white p-4 text-[#091717] shadow-sm">
				<div className="mb-3">
					<div className="text-right text-lg font-mono bg-[#f4f1e6] p-2 rounded">
						{display}
					</div>
					{history.length > 0 && (
						<div className="text-xs text-[#091717]/60 mt-1">
							Recent: {history[history.length - 1]}
						</div>
					)}
				</div>
				<div className="grid grid-cols-4 gap-2">
					{buttons.flat().map((btn, i) => (
						<button
							key={i}
							onClick={() => handleButtonClick(btn)}
							className={`p-2 rounded text-sm font-medium transition-colors ${
								["+", "-", "*", "/", "="].includes(btn)
									? "bg-[#21808d] text-white hover:bg-[#1a6a73]"
								: btn === "C"
									? "bg-[#f04438] text-white hover:bg-[#d9372b]"
								: "bg-[#f4f1e6] text-[#091717] hover:bg-[#ebe3cf]"
							}`}
						>
							{btn}
						</button>
					))}
				</div>
				{type === "scientific" && (
					<div className="mt-2 text-xs text-[#091717]/60">
						Scientific calculator with advanced functions
					</div>
				)}
			</div>
		);
	},

	// Chart Data Visualization
	"chart-data": ({ chartType, data, title, height }) => {
		const maxValue = Math.max(
			...data.datasets.flatMap((d) => {
				if (chartType === "scatter") {
					return d.data.flat();
				}
				return d.data;
			}),
		);

		return (
			<div className="rounded-2xl border border-[#e4e3d4] bg-white p-4 text-[#091717] shadow-sm">
				{title && (
					<h3 className="text-lg font-semibold mb-4 text-[#0f1916]">{title}</h3>
				)}
				<div
					style={{ height: `${height}px` }}
					className="flex flex-col justify-end items-center"
				>
					{chartType === "bar" && (
						<div className="flex items-end gap-1 w-full h-full">
							{data.labels.map((label, i) => (
								<div key={i} className="flex flex-col items-center flex-1">
									<div className="w-full bg-gradient-to-t from-blue-500 to-purple-600 rounded-t-sm flex-1 flex items-end justify-center">
										<span className="text-xs text-white/80 pb-1">
											{data.datasets[0]?.data[i] || 0}
										</span>
									</div>
									<div className="text-xs text-white/60 mt-1">{label}</div>
								</div>
							))}
						</div>
					)}
					{chartType === "pie" && (
						<div className="relative w-48 h-48 rounded-full bg-gradient-to-r from-[#21808d] via-[#299da9] to-[#4cc2be] flex items-center justify-center">
							<div className="w-32 h-32 rounded-full bg-white flex items-center justify-center text-center text-xs text-[#091717]">
								<div>
									<div className="font-bold">{data.labels[0]}</div>
									<div className="text-white/80">
										{data.datasets[0]?.data[0] || 0}
									</div>
								</div>
							</div>
						</div>
					)}
					{chartType === "line" && (
						<div className="w-full h-full flex items-end gap-2">
							<svg className="w-full h-full">
								{data.datasets.map((dataset, i) => (
									<polyline
										key={i}
										points={dataset.data
											.map((value, j) => {
												const x = (j / (dataset.data.length - 1)) * 100;
												const y = 100 - (value / maxValue) * 80;
												return `${x},${y}`;
											})
											.join(" ")}
										fill="none"
										stroke={dataset.color || `hsl(${i * 60}, 70%, 60%)`}
										strokeWidth="2"
									/>
								))}
							</svg>
						</div>
					)}
					{chartType === "scatter" && (
						<div className="w-full h-full flex items-center justify-center">
							<svg
								className="w-full h-full"
								viewBox="0 0 100 100"
								preserveAspectRatio="none"
							>
								{data.datasets.map((dataset, i) => (
									<g key={i}>
										{dataset.data.map((point, j) => {
											const [x, y] = point;
											const xPos = (x / maxValue) * 90 + 5;
											const yPos = 95 - (y / maxValue) * 90;
											return (
												<circle
													key={j}
													cx={xPos}
													cy={yPos}
													r="2"
													fill={dataset.color || `hsl(${i * 60}, 70%, 60%)`}
													opacity="0.8"
												/>
											);
										})}
									</g>
								))}
							</svg>
						</div>
					)}
				</div>
				<div className="mt-4 flex flex-wrap gap-2">
					{data.datasets.map((dataset, i) => (
						<div key={i} className="flex items-center gap-1 text-xs">
							<div
								className="w-3 h-3 rounded"
								style={{
									backgroundColor: dataset.color || `hsl(${i * 60}, 70%, 60%)`,
								}}
							/>
							<span>{dataset.label}</span>
						</div>
					))}
				</div>
			</div>
		);
	},

	// Interactive Todo List
	"todo-list": ({
		title,
		items,
		allowAdd,
		allowDelete,
		showProgress,
	}) => {
		const [todoItems, setTodoItems] = useState(items);
		const [newTask, setNewTask] = useState("");

		const toggleTask = (index) => {
			setTodoItems((prev) =>
				prev.map((item, i) =>
					i === index ? { ...item, completed: !item.completed } : item,
				),
			);
		};

		const addTask = () => {
			if (newTask.trim()) {
				setTodoItems((prev) => [
					...prev,
					{ text: newTask, completed: false, priority: "medium" },
				]);
				setNewTask("");
			}
		};

		const removeTask = (index) => {
			setTodoItems((prev) => prev.filter((_, i) => i !== index));
		};

		const completedCount = todoItems.filter((item) => item.completed).length;
		const progress =
			todoItems.length > 0 ? (completedCount / todoItems.length) * 100 : 0;

		return (
			<div className="rounded-2xl border border-[#e4e3d4] bg-white p-4 text-[#091717] shadow-sm">
				<div className="flex justify-between items-center mb-4">
					<h3 className="text-lg font-semibold">{title}</h3>
					{showProgress && (
						<div className="text-xs text-[#091717]/60">
							{completedCount}/{todoItems.length} completed
						</div>
					)}
				</div>

				{showProgress && (
					<div className="mb-4">
						<div className="w-full bg-[#f1ede0] rounded-full h-2">
							<div
								className="bg-gradient-to-r from-[#21808d] to-[#4cc2be] h-2 rounded-full transition-all"
								style={{ width: `${progress}%` }}
							/>
						</div>
					</div>
				)}

				<div className="space-y-2 mb-4 max-h-48 overflow-y-auto">
					{todoItems.map((item, index) => (
						<div
							key={index}
							className={`flex items-center gap-2 p-2 rounded ${
								item.completed ? "bg-[#dff3f5]" : "bg-[#f8f5ec]"
							}`}
						>
							<button
								onClick={() => toggleTask(index)}
								className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
									item.completed
										? "bg-[#21808d] border-[#21808d] text-white"
										: "border-[#c8c3b0]"
							}`}
							>
								{item.completed && "✓"}
							</button>
							<span
								className={`flex-1 text-sm ${
									item.completed ? "line-through text-[#091717]/40" : ""
								}`}
							>
								{item.text}
							</span>
							{item.priority && (
								<span
									className={`text-xs px-1 py-0.5 rounded ${
										item.priority === "high"
											? "bg-[#fde2dd] text-[#c01a09]"
										: item.priority === "medium"
											? "bg-[#fff4d6] text-[#b06500]"
											: "bg-[#dff3f5] text-[#0c646d]"
									}`}
								>
									{item.priority}
								</span>
							)}
							{allowDelete && (
								<button
									onClick={() => removeTask(index)}
									className="text-[#c01a09] hover:text-[#a11205] text-xs"
								>
									✕
								</button>
							)}
						</div>
					))}
				</div>

				{allowAdd && (
					<div className="flex gap-2">
						<input
							type="text"
							value={newTask}
							onChange={(e) => setNewTask(e.target.value)}
							placeholder="Add new task..."
							className="flex-1 bg-white border border-[#e4e3d4] rounded px-2 py-1 text-sm text-[#091717] placeholder:text-[#091717]/40"
							onKeyPress={(e) => e.key === "Enter" && addTask()}
						/>
						<button
							onClick={addTask}
							className="bg-[#21808d] hover:bg-[#1a6a73] px-3 py-1 rounded text-sm text-white"
						>
							Add
						</button>
					</div>
				)}
			</div>
		);
	},

	// Alert Notifications
	"alert-notification": ({ type, message, title }) => {
		const typeStyles = {
			info: "bg-[#e5f6ff] border-[#b8e1f2] text-[#0f3a46]",
			success: "bg-[#e3f7e8] border-[#b5e4c0] text-[#134b2c]",
			warning: "bg-[#fff7e0] border-[#ffe1a4] text-[#624200]",
			error: "bg-[#fde6e4] border-[#f5b5ae] text-[#621b16]",
		};

		const icons = {
			info: "ℹ️",
			success: "✅",
			warning: "⚠️",
			error: "❌",
		};

		return (
			<div className={`rounded-2xl border p-3 ${typeStyles[type]} shadow-sm`}>
				<div className="flex items-start gap-2">
					<span className="text-lg">{icons[type]}</span>
					<div className="flex-1">
						{title && <div className="font-semibold mb-1">{title}</div>}
						<div className="text-sm">{message}</div>
					</div>
				</div>
			</div>
		);
	},

	// Progress Indicators
	"progress-indicator": ({ value, max, label }) => {
		const percentage = (value / max) * 100;

		return (
			<div className="rounded-2xl border border-[#e4e3d4] bg-white p-4 text-[#091717] shadow-sm">
				{label && <div className="text-sm mb-2 text-[#0f1916]">{label}</div>}
				<div className="w-full bg-[#f1ede0] rounded-full h-3">
					<div
						className="bg-gradient-to-r from-[#299da9] to-[#4cc2be] h-3 rounded-full transition-all"
						style={{ width: `${percentage}%` }}
					/>
				</div>
				<div className="text-xs text-[#091717]/60 mt-1">
					{value} / {max} ({percentage.toFixed(1)}%)
				</div>
			</div>
		);
	},

	// Data Tables
	"data-table": ({
		columns = [],
		rows = [],
		sortable,
		filterable,
	}) => {
		// Handle empty data gracefully
		if (!columns || columns.length === 0) {
			return (
				<div className="bg-white/[0.05] rounded-2xl border border-white/10 p-4 text-white/60 text-center">
					No data available
				</div>
			);
		}

		return (
			<div className="rounded-2xl border border-[#e4e3d4] overflow-hidden text-[#091717] bg-white shadow-sm">
				<div className="overflow-x-auto">
					<table className="w-full">
						<thead>
							<tr className="bg-[#f6f5ee]">
								{columns.map((col, i) => (
									<th
										key={i}
										className={`px-4 py-2 text-left text-sm font-semibold text-[#091717] ${
											sortable ? "cursor-pointer hover:bg-white" : ""
										}`}
									>
										{col}
									</th>
								))}
							</tr>
						</thead>
						<tbody>
							{rows.map((row, i) => (
								<tr
									key={i}
									className="border-t border-[#f0ede2] hover:bg-[#f8f6ef] transition-colors"
								>
									{row.map((cell, j) => (
										<td key={j} className="px-4 py-2 text-sm">
											{cell}
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
				{filterable && (
					<div className="p-2 border-t border-[#f0ede2] bg-[#fdfbf5]">
						<input
							type="text"
							placeholder="Filter rows..."
							className="w-full bg-white border border-[#e4e3d4] rounded px-2 py-1 text-sm text-[#091717] placeholder:text-[#091717]/40"
						/>
					</div>
				)}
			</div>
		);
	},

	// Form Inputs
	"form-input": ({
		type,
		label,
		placeholder,
		options,
		required,
	}) => {
		const [value, setValue] = useState("");

		if (type === "select" && options) {
			return (
				<div className="space-y-1">
					<label className="block text-sm text-[#091717]/80">
						{label}
						{required && <span className="text-red-400 ml-1">*</span>}
					</label>
					<select
						value={value}
						onChange={(e) => setValue(e.target.value)}
						className="w-full bg-white border border-[#e4e3d4] rounded px-2 py-1 text-sm text-[#091717]"
					>
						<option value="">{placeholder || "Select option..."}</option>
						{options.map((option, i) => (
							<option key={i} value={option} className="bg-white">
								{option}
							</option>
						))}
					</select>
				</div>
			);
		}

		return (
			<div className="space-y-1">
				<label className="block text-sm text-[#091717]/80">
					{label}
					{required && <span className="text-red-400 ml-1">*</span>}
				</label>
				<input
					type={type}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					placeholder={placeholder}
					required={required}
					className="w-full bg-white border border-[#e4e3d4] rounded px-2 py-1 text-sm text-[#091717] placeholder:text-[#091717]/40"
				/>
			</div>
		);
	},

	// Image Display
	"image-display": ({ src, alt, caption, interactive }) => {
		return (
			<div className="rounded-2xl border border-[#e4e3d4] overflow-hidden text-[#091717] bg-white shadow-sm">
				<div
					className={`${interactive ? "cursor-pointer hover:opacity-80" : ""}`}
				>
					<img src={src} alt={alt} className="w-full h-auto" />
				</div>
				{(caption || alt) && (
					<div className="p-3 border-t border-[#f0ede2]">
						<p className="text-sm text-[#091717]/80">{caption || alt}</p>
					</div>
				)}
			</div>
		);
	},

	// Button Groups
	"button-group": ({ buttons }) => {
		const variantStyles = {
			primary: "bg-[#21808d] hover:bg-[#1a6a73] text-white",
			secondary: "bg-[#f4f1e6] hover:bg-[#ebe3cf] text-[#091717]",
			danger: "bg-[#f04438] hover:bg-[#d9372b] text-white",
		};

		if (!buttons || !Array.isArray(buttons)) {
			return (
				<div className="bg-white/[0.05] rounded-2xl border border-white/10 p-4 text-white/60 text-center">
					No buttons available
				</div>
			);
		}

		return (
			<div className="flex flex-wrap gap-2">
				{buttons.map((button, i) => (
					<button
						key={i}
						onClick={() => {
							if (button.action) {
								alert(`Button "${button.label}" clicked!`);
							}
						}}
						className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
							variantStyles[button.variant || "secondary"]
						}`}
					>
						{button.label}
					</button>
				))}
			</div>
		);
	},

	// Text Cards
	"text-card": ({ title, content, variant }) => {
		const variantStyles = {
			info: "bg-[#e6f3ff] border-[#b8daf8] text-[#0b3651]",
			warning: "bg-[#fff5dc] border-[#ffe1a4] text-[#624200]",
			success: "bg-[#e3f7e8] border-[#b5e4c0] text-[#134b2c]",
			error: "bg-[#fde6e4] border-[#f5b5ae] text-[#621b16]",
		};

		return (
			<div className={`rounded-2xl border p-4 shadow-sm ${variantStyles[variant]}`}>
				{title && <h3 className="font-semibold mb-2">{title}</h3>}
				<p className="text-sm leading-relaxed">{content}</p>
			</div>
		);
	},

	// Dynamic Text
	"dynamic-text": ({ text, format }) => {
		return (
			<div className="text-[#091717]">
				{format === "markdown" ? (
					<div
						dangerouslySetInnerHTML={{
							__html: text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
						}}
					/>
				) : format === "html" ? (
					<div dangerouslySetInnerHTML={{ __html: text }} />
				) : (
					<p>{text}</p>
				)}
			</div>
		);
	},

	// Layout Container
	"layout-container": ({
		direction,
		align,
		gap = 8,
		children,
	}) => {
		const directionClass = direction === "horizontal" ? "flex-row" : "flex-col";
		const alignClass = {
			start: "items-start",
			center: "items-center",
			end: "items-end",
			between: "justify-between",
			around: "justify-around",
		}[align || "start"];

		return (
			<div
				className={`flex ${directionClass} ${alignClass}`}
				style={{ gap: `${gap}px` }}
			>
				{children}
			</div>
		);
	},
};
