import Head from "next/head";
import { Text, Box, Flex, Grid } from "@chakra-ui/react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import { DeviceMobileIcon } from "@heroicons/react/outline";

export default function Home({ exploreData, cardsData }) {
	return (
		<div className=''>
			<Head>
				<title>Airbnb</title>
				<meta name='description' content='Cloned using chakra ui and Nextjs' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Header />
			<Banner />

			<Box maxW='7xl' mx='auto' px={[8, 16]}>
				<Box pt={6}>
					<Text fontSize='4xl' fontWeight='bold' pb={5}>
						Explore Nearby
					</Text>
					<Grid
						gap={2}
						templateColumns={[
							"(1, 1fr)",
							"repeat(2, 1fr)",
							"repeat(3,1fr)",
							"repeat(4,1fr)",
						]}
					>
						{/* Pull some data fronm a server - API endpoints  */}
						{exploreData?.map((item) => (
							<SmallCard
								key={item.location}
								img={item.img}
								distance={item.distance}
								location={item.location}
							/>
						))}
					</Grid>
				</Box>

				<Box>
					<Text fontSize='4xl' fontWeight='semibold' py={8}>
						Live Anywhere
					</Text>

					<div
						/* gap={3}
						overflow='scroll'
						overflowX='auto'
						p={3}
						ml={-3} */
						className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'
					>
						{cardsData?.map(({ img, title }) => (
							<MediumCard img={img} key={img} title={title} />
						))}
					</div>
				</Box>

				<LargeCard
					img='https://links.papareact.com/4cj'
					title='The Green Outdoors'
					description='Wishlists curated by Airbnb'
					buttonText='Get Inspired'
				/>
			</Box>

			<Footer />
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);

	const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
		res.json()
	);

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
