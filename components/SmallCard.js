import { Box, Image, Flex, Text } from "@chakra-ui/react";

function SmallCard({ location, distance, img }) {
	return (
		<Flex
			direction='row'
			align='center'
			m={2}
			mt={5}
			gap={4}
			cursor='pointer'
			_hover={{
				bg: "gray.100",
				boxShadow: "xl",
				transform: "scale(1.05)",
			}}
			transition='0.2s'
		>
			{/* Left */}
			<Box position='relative' h={16} w={16}>
				<Image src={img} layout='fill' alt='' borderRadius='lg' />
			</Box>

			{/* Right */}
			<Box>
				<Text as='h2' fontWeight='medium'>
					{location}
				</Text>
				<Text as='h3' fontWeight='medium' color='gray.500'>
					{distance}
				</Text>
			</Box>
		</Flex>
	);
}

export default SmallCard;
