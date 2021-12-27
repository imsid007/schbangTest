export default function Col({ children, size, className, style }) {
	return (
		<div
			className={className}
			style={{ width: size + "%", display: "block", ...style }}
		>
			{children}
		</div>
	);
}
