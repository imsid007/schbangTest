import CustomHeader from "./custom-header";

export default function MainLayout({ children }) {
	return (
		<div>
			<CustomHeader />
			{children}
		</div>
	);
}
