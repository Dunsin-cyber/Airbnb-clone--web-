import { Box, Text, Show, Flex, Center } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Tops from "../components/shared/Tops";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
// import Map from "../components/Map";

//reuseable utility classes
function Search({ searchResults }) {
	// console.log(searchResults);
	const router = useRouter();

	// ES6 destructuring
	const { location, startDate, endDate, numberOfGuest } = router.query;
	const formattedStartDate = format(new Date(startDate), "dd MMM yy");
	const formattedEndDate = format(new Date(endDate), "dd MMM yy");

	const range = `${formattedStartDate} - ${formattedEndDate}`;
	return (
		<Box>
			<Header
				placeholder={`${location} | ${range} |  ${numberOfGuest} guests`}
			/>
			{/* left */}
			<Center>
				<Box flexGrow pt={14} px={6}>
					<Text fontWeight='semibold' fontSize='xs'>
						300+ stays - {range} - for {numberOfGuest} guests
					</Text>
					<Text fontWeight='bold' fontSize='3xl' mt={2} mb={6}>
						Stays in {location}
					</Text>
					<Show above='lg'>
						<Box
							mb={5}
							gap={3}
							display='flex'
							color='gray.500'
							whiteSpace='no-wrap'
						>
							<Tops name='Cancellation Flexibility Flexibility' />
							<Tops name='Type of Place' />
							<Tops name='Price' />
							<Tops name='Rooms and Beds' />
							<Tops name='More Filters' />
						</Box>
					</Show>
					<Flex direction='column'>
						{searchResults?.map(
							({ img, price, star, total, description, title, location }) => (
								<InfoCard
									img={img}
									key={img}
									location={location}
									star={star}
									total={total}
									price={price}
									description={description}
									title={title}
								/>
							)
						)}
					</Flex>
				</Box>
				{/* <Hide below='lg'> */}
				{/* <Box minWidth='600px'>
					<Map />
				</Box> */}
				{/* </Hide> */}
			</Center>

			<Footer />
		</Box>
	);
}

export default Search;

export const getServerSideProps = async () => {
	const searchResults = await fetch("https://links.papareact.com/isz").then(
		(res) => res.json()
	);

	return {
		props: {
			searchResults,
		},
	};
};
