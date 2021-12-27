import React from "react";
import { MdLocationOn } from "react-icons/md";
import styles from "../styles/modules/home.module.scss";

export default function LocationTag() {
	return (
		<div className={styles.location_tag}>
			<span style={{ fontSize: "30px", marginRight: "5px" }}>
				{" "}
				<MdLocationOn />{" "}
			</span>
			Hyderabad
		</div>
	);
}
