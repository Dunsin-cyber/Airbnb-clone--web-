import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";

// when you make something relative, you have to define the height and the width
function Banner() {
	return (
		<Box
			flex
			position='relative'
			h={["300px", "400px", "500px", "600px", "700px"]}
		>
			<Image
				src='https://links.papareact.com/0fm'
				objectFit='cover'
				alt=''
				layout='fill'
			/>

			<Flex
				position='absolute'
				direction='column'
				top='50%'
				w='full'
				justify='center'
				align='center'
			>
				<Text fontSize={["sm", "xl"]}>Not sure where to go? Perfect.</Text>
				<Button
					className='myBox'
					colorScheme='gray'
					size='lg'
					px={10}
					py={4}
					boxShadow='md'
					color='purple'
					borderRadius='full'
					my={3}
					fontWeight='bold'
					variant='ghost'
					/* sx={{
						outline: "none",
					}} */
					// border='none'

					_hover={{ boxShadow: "xl" }}
					transition='duration 150'
					_active={{
						transform: "scale(0.90)",
					}}
				>
					I am Flexible
				</Button>
			</Flex>
		</Box>
	);
}

export default Banner;
