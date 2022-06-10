import { Text } from "@chakra-ui/react";

function Tops({ name, props }) {
	return (
		<Text
			px={4}
			py={2}
			mb={4}
			boxShadow='md'
			cursor='pointer'
			borderRadius='full'
			transition='0.1s ease-out'
			_hover={{
				boxShadow: "lg",
			}}
			_active={{
				transform: "scale(0.95)",
				bg: "gray.100",
			}}
			sx={{
				...props,
			}}
		>
			{name}
		</Text>
	);
}

export default Tops;
