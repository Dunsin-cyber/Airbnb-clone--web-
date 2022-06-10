import {
	Flex,
	Grid,
	Text,
	Input,
	Show,
	Hide,
	Icon,
	GridItem,
	Box,
	NumberInput,
	NumberInputField,
	NumberInputStepper,
	NumberDecrementStepper,
	NumberIncrementStepper,
	Button,
	Image,
} from "@chakra-ui/react";
import { useState } from "react";
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
// import Image from "next/image";
import { DateRangePicker, DefinedRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Header({ placeholder }) {
	const [searchInput, setSearchInput] = useState("");

	const resetInput = () => {
		setSearchInput("");
	};
	return (
		<Grid
			// as='div'
			position='sticky'
			bg='white'
			templateColumns='repeat(3, 1fr)'
			boxShadow='md'
			zIndex={50}
			mt={0}
			p={1.5}
			px={[1.5, 5]}
		>
			<Left />
			<Middle
				searchInput={searchInput}
				placeholder={placeholder}
				setSearchInput={setSearchInput}
			/>
			<Right />
			{searchInput && (
				<DatePicker resetInput={resetInput} searchInput={searchInput} />
			)}
		</Grid>
	);
}

export default Header;

const Left = () => {
	const router = useRouter();
	return (
		<Flex>
			<Image
				src='https://links.papareact.com/qd3'
				alt=''
				layout='fill'
				objectFit='contain'
				objectPosition='left'
				onClick={() => router.push("/")}
				my='auto'
				align='center'
				maxW={[100, 120]}
				// position='relative'
				h={10}
				cursor='pointer'
			/>
		</Flex>
	);
};

const Middle = ({ searchInput, setSearchInput, placeholder }) => {
	return (
		<Flex
			align='center'
			borderWidth={[0, 2]}
			maxW='400px'
			borderRadius='full'
			boxShadow={[0, " sm"]}
			py={2}
		>
			<Input
				value={searchInput}
				onChange={(e) => setSearchInput(e.target.value)}
				placeholder={placeholder || "start your search"}
				size='md'
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

const DatePicker = ({ resetInput, searchInput }) => {
	const router = useRouter();
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
	const [numberOfGuest, setNumberOfGuest] = useState(1);

	const selectionRange = {
		startDate,
		endDate,
		key: "selection",
	};

	const handleSelect = (ranges) => {
		// console.log(ranges)
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const search = () => {
		router.push({
			pathname: "/search",
			query: {
				location: searchInput,
				startDate: startDate.toISOString(),
				endDate: endDate.toDateString(),
				numberOfGuest,
			},
		});
	};

	return (
		<GridItem direction='column' mx='auto' colSpan={3}>
			<Show below='md'>
				<DefinedRange onChange={handleSelect} ranges={[selectionRange]} />;
			</Show>
			<Show above='md'>
				<DateRangePicker
					ranges={[selectionRange]}
					minDate={new Date()}
					rangeColors={["#FD5B61"]}
					onChange={handleSelect}
				/>
			</Show>
			<Flex align='center' borderBottom={4} mb={4}>
				<Text
					as='h2'
					fontWeight='semibold'
					fontSize={{ lg: "2xl" }}
					pl={2}
					flexGrow='1'
				>
					Number of Guest
				</Text>
				<Icon as={UsersIcon} h={5} />
				<Box pl={2}>
					<NumberInput
						size='lg'
						color='red.400'
						maxW={16} /* outlineStyle='none' */
						value={numberOfGuest}
						min={1}
						onChange={(num) => setNumberOfGuest(num)}
					>
						<NumberInputField />
						<NumberInputStepper size='xs'>
							<NumberIncrementStepper />
							<NumberDecrementStepper />
						</NumberInputStepper>
					</NumberInput>
				</Box>
			</Flex>
			<Flex justify='space-around'>
				<Button onClick={resetInput} variant='ghost' color='gray.500'>
					Cancel
				</Button>
				<Button onClick={search} variant='ghost' color='red.400'>
					Search
				</Button>
			</Flex>
		</GridItem>
	);
};
