import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
// import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, price, star, total, description, title, location }) {
	return (
		<Box
			display='flex'
			py={7}
			px={2}
			mt={5}
			borderBottom={1}
			boxShadow='sm'
			cursor='pointer'
			_hover={{ boxShadow: "xl", opacity: "80%" }}
			transition='0.2s ease-out'
		>
			{/* <Box position='relative' h={[24, 52]} w={[40, 80]} flexShrink={0}> */}
			<Image
				src={img}
				alt=''
				layout='fill'
				objectFit='cover'
				borderRadius='2xl'
				position='relative'
				h={[24, 52]}
				w={[40, 80]}
				flexShrink={0}
			/>
			{/* </Box> */}

			<Flex direction='column' flexGrow={1} pl={5}>
				<Flex justify='space-between'>
					<Text fontWeight='semibold'>{location}</Text>
					<Icon as={HeartIcon} h={7} cursor='pointer' />
				</Flex>
				<Text fontSize='xl' fontWeight='semibold'>
					{title}
				</Text>
				<Box borderBottom w={10} pt={2} />

				<Text pt={2} fontSize='sm' color='gray.500' flexGrow>
					{description}
				</Text>
				<Flex justify='space-between' pt={5}>
					<Text as='p' display='flex' alignItems='center'>
						<Icon as={StarIcon} h={5} color='red.400' />
						{star}
					</Text>

					<Box>
						<Text fontSize={["lg", "2xl"]} fontWeight='semibold'>
							{price}
						</Text>
						<Text textAlign='right' fontWeight='extralight'>
							{total}
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Box>
	);
}

export default InfoCard;
