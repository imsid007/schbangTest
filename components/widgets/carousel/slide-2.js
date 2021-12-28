import React from "react";
import styles from "../../../styles/modules/home.module.scss";
import Image from "next/image";

export default function Slide2() {
	return (
		<div className={styles.header_image_wrapper_slide_2}>
			<div className={styles.header_image_container_slide_2}>
				<Image layout="fill" alt="salad-plate" src="/images/biryani.svg" />
			</div>
		</div>
	);
}
