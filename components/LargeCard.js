import { Box, Image, Text, Button } from "@chakra-ui/react";

function LargeCard({ img, title, description, buttonText }) {
	return (
		<Box position='relative' py={16} cursor='pointer'>
			<Box position='relative' h={96} minWidth='300px'>
				<Image
					src={img}
					alt=''
					layout='fill'
					objectFit='cover'
					borderRadius='2xl'
				/>
			</Box>

			<Box position='absolute' top={32} left={12}>
				<Text fontSize='4xl' fontWeight='semibold' mb={3} w={64}>
					{title}
				</Text>
				<Text>{description}</Text>

				<Button
					bgColor='gray'
					color='white'
					px={4}
					py={2}
					mt={5}
					borderRadius='lg'
				>
					{buttonText}
				</Button>
			</Box>
		</Box>
	);
}

export default LargeCard;
