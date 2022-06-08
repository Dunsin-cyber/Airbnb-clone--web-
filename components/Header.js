import { Box, Flex, Text, Input, Show, Icon, Image } from "@chakra-ui/react";
// import Image from "next/image";
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
	return (
		<Flex
			as='div'
			position='sticky'
			bg='white'
			justify='space-between'
			boxShadow='md'
			zIndex={50}
			mt={0}
			p={1.5}
			px={[1.5, 5]}
		>
			<Left />
			<Middle />
			<Right />
		</Flex>
	);
}

export default Header;

const Left = () => {
	return (
		<Box
			as='div'
			my='auto'
			align='center'
			position='relative'
			h={10}
			maxW={[100, 120]}
			cursor='pointer'
		>
			<Image
				src='https://links.papareact.com/qd3'
				alt=''
				layout='fill'
				objectFit='contain'
				objectPosition='left'
			/>
		</Box>
	);
};

const Middle = () => {
	return (
		<Flex
			align='center'
			borderWidth={[0, 2]}
			w='400px'
			borderRadius='full'
			boxShadow={[0, " sm"]}
			py={2}
		>
			<Input
				placeholder='start your search'
				size='xs'
				// htmlSize={30}
				width='auto'
				pl={[5, 3]}
				variant='unstyled'
				flexGrow='1'
			/>
			<Show above='sm'>
				<Icon
					as={SearchIcon}
					h={8}
					w={8}
					color='white'
					display='inline-flex'
					borderRadius='100%'
					bgColor='red.400'
					p={2}
					cursor='pointer'
					mx={2}
				/>
			</Show>
		</Flex>
	);
};
const Right = () => {
	return (
		<Flex gap={3} align='center' justify='end' color='gray.500'>
			<Show above='sm'>
				<Text cursor='pointer'>Become a Host</Text>
			</Show>
			<Icon as={GlobeAltIcon} h={6} cursor='pointer' />
			<Flex
				align='center'
				p={2}
				cursor='pointer'
				borderWidth={2}
				borderRadius={100}
			>
				<Icon as={MenuIcon} h={6} />
				<Icon as={UserCircleIcon} h={6} />
			</Flex>
		</Flex>
	);
};
