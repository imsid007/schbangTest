import Col from "../widgets/elements/col";
import Row from "../widgets/elements/row";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CustomHeader() {
	const [state, setstate] = useState(0);

	function handleScroll() {
		const data = this.scrollY;
		setstate(data);
	}
	useEffect(() => {
		window.addEventListener("scroll", handleScroll, false);
	});

	return (
		<div style={{}}>
			<Row
				className={state > 50 ? "scroll-header" : "top-header"}
				align="center"
			>
				<Col size="70" style={{ paddingLeft: "100px" }}>
					<Row align="center">
						<div className="brand-logo" style={{}}>
							<Image
								layout="fill"
								objectFit="contain"
								alt="logo"
								src="/images/logo.svg"
							/>
						</div>
						<span className="menu-itom">Menu One</span>
						<span className="menu-itom">Menu Two</span>
						<span className="menu-itom">Menu Three</span>
						<span className="menu-itom">Menu Four</span>
					</Row>
				</Col>
				<Col size="30" style={{ textAlign: "end" }}>
					<div style={{ textAlign: "end" }}>
						<div
							style={{
								width: "50px",
								height: "30px",
								position: "relative",
								borderRadius: "50%",
								overflow: "hidden",
								marginLeft: "100px",
							}}
						>
							<Image
								layout="fill"
								objectFit="contain"
								alt="logo"
								src="/images/user.png"
							/>
						</div>
					</div>
				</Col>
			</Row>
		</div>
	);
}
