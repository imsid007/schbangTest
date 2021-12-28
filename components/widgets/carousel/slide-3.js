import React from "react";
import styles from "../../../styles/modules/home.module.scss";
import Image from "next/image";

export default function Slide3() {
	return (
		<div className={styles.header_image_wrapper}>
			<div className={styles.header_image_container}>
				<Image
					layout="fill"
					alt="salad-plate"
					src="/images/carousel/salad-2.svg"
				/>
			</div>
		</div>
	);
}
