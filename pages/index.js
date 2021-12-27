import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layout/main-layout";
import Row from "../components/widgets/elements/row";
import styles from "../styles/modules/home.module.scss";
import { MdLocationOn } from "react-icons/md";
import RestoCards from "../components/widgets/resto-cards";
import { useState } from "react";

export default function Home() {
	const [restoCount, setRestoCount] = useState(2);
	const resto = [
		{
			name: "Fire Water",
			url: "https://static01.nyt.com/images/2021/07/21/dining/19Kenji1/19Kenji1-mediumSquareAt3X.jpg",
		},
		{
			name: "Ice Rooftop",
			url: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		},
		{
			name: "Burger Bun",
			url: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNxdWFyZSUyMHBpenphfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
		},
		{
			name: "Fire Water",
			url: "https://images.unsplash.com/photo-1596649299486-4cdea56fd59d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1cmdlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
		},
	];
	return (
		<MainLayout>
			<div className={styles.location_tag}>
				<span style={{ fontSize: "30px", marginRight: "5px" }}>
					{" "}
					<MdLocationOn />{" "}
				</span>
				Hyderabad
			</div>
			<div>
				<Head>
					<title>Food</title>
					<meta name="description" content="Food" />
					<link rel="icon" href="/favicon.ico" />
				</Head>

				<Row align="center" className={styles.header_row}>
					<div className={styles.header_left_column}>
						<Row
							align="center"
							justify="center"
							className={styles.header_left_column_container}
						>
							<div style={{ zIndex: "50" }}>
								<span className={styles.title}>
									Discover Restaurant & Delicious Food
								</span>
								<div className={styles.header_input_container}>
									<input
										className={styles.header_input}
										placeholder="search restaurant,food"
									/>
									<button className={styles.header_submit_btn}>Go</button>
								</div>
							</div>
						</Row>
					</div>
					<div
						style={{ height: "100%", position: "relative" }}
						className={styles.header_right_column}
					>
						<div className={styles.header_image_wrapper}>
							<div className={styles.header_image_container}>
								<Image
									layout="fill"
									alt="salad-plate"
									src="/images/salad-plate.svg"
								/>
							</div>
						</div>
						<div className={styles.header_background_wrapper}>
							<div className={styles.header_background_container}>
								<Image layout="fill" src="/images/long-dots.svg" alt="dots" />
							</div>
						</div>

						<div className={styles.red_column}></div>
					</div>
				</Row>

				<Row
					style={{ paddingTop: "50px", minHeight: "100vh" }}
					justify="center"
				>
					<div style={{ width: "30%" }}>
						<div className={styles.sub_title}>
							some top restaurant for dining out or in!
						</div>
					</div>

					<div className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					</div>

					<div style={{ position: "relative", width: "100vw" }}>
						<div className={styles.resto_top_background_wrapper}>
							<div className={styles.resto_top_background_container}>
								<Image
									layout="fill"
									objectFit="contain"
									alt="dots image"
									src="/images/dots.svg"
								/>
							</div>
						</div>
						<div className={styles.resto_bottom_background_wrapper}>
							<div className={styles.resto_bottom_background_container}>
								<Image layout="fill" src="/images/dots.svg" alt="dots" />
							</div>
						</div>
						<div className={styles.resto_card_wrapper}>
							{resto.slice(0, restoCount).map((resto) => (
								<RestoCards
									key={Math.random}
									name={resto.name}
									url={resto.url}
								/>
							))}
							<div
								className={styles.see_more_container}
								onClick={() => {
									setRestoCount(resto.length);
								}}
							>
								<Image
									layout="fill"
									objectFit="contain"
									src="/images/see-more-logo.svg"
									alt="see-more"
								/>
							</div>
						</div>
					</div>
				</Row>
				<Row align="center" justify="center" className={styles.footer_section}>
					<div className={styles.form_container}>
						<div className={styles.color_head}></div>
						<div className={styles.footer_title}>advanced booking</div>
						<div>
							<div className={styles.footer_input_container}>
								<input
									className={styles.footer_input}
									placeholder="search restaurant"
								/>
								<button className={styles.footer_submit_btn}>Go</button>
							</div>
						</div>
					</div>
					<div className={styles.left_veggi_wrapper}>
						<div
							style={{ position: "relative", width: "40vw", height: "50vw" }}
						>
							<Image layout="fill" src="/images/test2.png" alt="iceberg" />
						</div>
					</div>
					<div>
						<div className={styles.right_veggi_wrapper}>
							<div style={{ position: "relative" }}>
								<Image
									height="400"
									width="400"
									src="/images/test2.png"
									alt="iceberg"
								/>
							</div>
						</div>
					</div>
				</Row>
			</div>
		</MainLayout>
	);
}
