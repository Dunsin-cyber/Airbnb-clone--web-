import { Grid, Box, Text, Spacer } from "@chakra-ui/react";

function Footer() {
	return (
		<Grid
			py={10}
			gap={5}
			templateColumns={["(1, 1fr)", "repeat(4, 1fr)"]}
			px={32}
			bgColor='gray.100'
			color='gray.600'
		>
			<Box fontSize='md' color='gray.800'>
				<Text as='h5' fontWeight='bold'>
					ABOUT
				</Text>
				<Text as='p'>How Airbnb Works</Text>
				<Spacer />
				<Text as='p'>Newsroom</Text>
				<Spacer />
				<Text as='p'>Investors</Text>
				<Text as='p'>Airbnb Plus</Text>
				<Text as='p'>Airbnb Luxe</Text>
			</Box>
			<Box gap={5} fontSize='md' color='gray.800'>
				<Text as='h5' fontWeight='bold'>
					COMMUNITY
				</Text>
				<Text as='p'>How Airbnb Works</Text>
				<Text as='p'>Newsroom</Text>
				<Text as='p'>Investors</Text>
				<Text as='p'>Airbnb Plus</Text>
				<Text as='p'>Airbnb Luxe</Text>
			</Box>
			<Box gap={5} fontSize='md' color='gray.800'>
				<Text as='h5' fontWeight='bold'>
					SUPPORT
				</Text>
				<Text as='p'>How Airbnb Works</Text>
				<Text as='p'>Newsroom</Text>
				<Text as='p'>Investors</Text>
				<Text as='p'>Airbnb Plus</Text>
				<Text as='p'>Airbnb Luxe</Text>
			</Box>
			<Box gap={5} fontSize='md' color='gray.800'>
				<Text as='h5' fontWeight='bold'>
					HOST
				</Text>
				<Text as='p'>How Airbnb Works</Text>
				<Text as='p'>Newsroom</Text>
				<Text as='p'>Investors</Text>
				<Text as='p'>Airbnb Plus</Text>
				<Text as='p'>Airbnb Luxe</Text>
			</Box>
		</Grid>
	);
}

export default Footer;
