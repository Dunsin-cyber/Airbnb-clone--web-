import { Box, Image, Text, Button, Center } from "@chakra-ui/react";

function LargeCard({ img, title, description, buttonText }) {
	return (
		<Center position='relative' py={16} cursor='pointer'>
			<Box>
				<Image
					src={img}
					alt=''
					layout='fill'
					objectFit='cover'
					borderRadius='2xl'
					h={96}
					minWidth='300px'
				/>
			</Box>

			<Box position='absolute' top={32} left={{ sm: 12, lg: 40 }}>
				<Text
					fontSize={["lg", "xl", "3xl"]}
					fontWeight='semibold'
					mb={3}
					w={64}
				>
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
		</Center>
	);
}

export default LargeCard;
