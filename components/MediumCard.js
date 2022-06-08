import { Box, Image, Text } from "@chakra-ui/react";

function MediumCard({ img, title }) {
	return (
		//hover scale
		<Box
			cursor='pointer'
			transition='0.3s ease-out'
			_hover={{
				transform: "scale(1.05)",
			}}
		>
			<Box position='relative' h={80} w={80}>
				<Image src={img} alt='' layout='fill' borderRadius='xl' />
				<Text fontSize='2xl' mt={3}>
					{title}
				</Text>
			</Box>
		</Box>
	);
}

export default MediumCard;
