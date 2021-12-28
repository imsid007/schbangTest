import React from "react";
import styles from "../../../styles/modules/home.module.scss";
import Image from "next/image";

export default function Slide1() {
	return (
		<div className={styles.header_image_wrapper}>
			<div className={styles.header_image_container}>
				<Image layout="fill" alt="salad-plate" src="/images/salad-plate.svg" />
			</div>
		</div>
	);
}
