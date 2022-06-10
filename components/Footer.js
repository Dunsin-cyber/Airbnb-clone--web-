import { Grid, Box, Text, Spacer, Center, Link, Icon } from "@chakra-ui/react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";

function Footer() {
	return (
		<Box py={10} bgColor='gray.100' px={32} color='gray.600'>
			<Center
				display='flex'
				flexDirection={["column", "row"]}
				alignItems='center'
				py={2}
			>
				<Link
					isExternal
					display='flex'
					alignItems='center'
					gap={2}
					cursor='pointer'
					px={3}
					py={2}
					fontSize='lg'
					fontWeight='semibold'
					transition='0.3s '
					_hover={{
						transform: "scale(1.2)",
					}}
					href='https://github.com/Dunsin-cyber/Airbnb-clone--web-'
				>
					<Icon as={CodeIcon} />
					<Text>Source Code</Text>
				</Link>

				<Link
					isExternal
					display='flex'
					alignItems='center'
					gap={2}
					cursor='pointer'
					px={3}
					py={2}
					fontWeight='semibold'
					fontSize='lg'
					transition='0.3s '
					_hover={{
						transform: "scale(1.2)",
					}}
					href='https://dunsin.site'
				>
					<Icon as={ExternalLinkIcon} mx='2px' />
					<Text>other works</Text>
				</Link>
			</Center>
			<Grid
				// py={10}
				gap={5}
				templateColumns={["(1, 1fr)", "repeat(4, 1fr)"]}
			>
				<Box fontSize='md' color='gray.500'>
					<Text as='h5' fontWeight='bold' color='gray.600'>
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
				<Box gap={5} fontSize='md' color='gray.500'>
					<Text as='h5' fontWeight='bold' color='gray.600'>
						COMMUNITY
					</Text>
					<Text as='p'>How Airbnb Works</Text>
					<Text as='p'>Newsroom</Text>
					<Text as='p'>Investors</Text>
					<Text as='p'>Airbnb Plus</Text>
					<Text as='p'>Airbnb Luxe</Text>
				</Box>
				<Box gap={5} fontSize='md' color='gray.500'>
					<Text as='h5' fontWeight='bold' color='gray.600'>
						SUPPORT
					</Text>
					<Text as='p'>How Airbnb Works</Text>
					<Text as='p'>Newsroom</Text>
					<Text as='p'>Investors</Text>
					<Text as='p'>Airbnb Plus</Text>
					<Text as='p'>Airbnb Luxe</Text>
				</Box>
				<Box gap={5} fontSize='md' color='gray.500'>
					<Text as='h5' fontWeight='bold' color='gray.600'>
						HOST
					</Text>
					<Text as='p'>How Airbnb Works</Text>
					<Text as='p'>Newsroom</Text>
					<Text as='p'>Investors</Text>
					<Text as='p'>Airbnb Plus</Text>
					<Text as='p'>Airbnb Luxe</Text>
				</Box>
			</Grid>
		</Box>
	);
}

export default Footer;
