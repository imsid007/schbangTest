export default function Row({ children, align, justify, className, style }) {
	return (
		<div
			className={className}
			style={{
				display: "flex",
				// flexDirection: "row",
				flexFlow: "row wrap",
				width: "100%",
				alignItems: align,
				justifyContent: justify,
				...style,
			}}
		>
			{children}
		</div>
	);
}
