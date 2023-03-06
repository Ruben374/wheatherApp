import { Box, Image, Text } from "native-base"

export default function Card() {
    return (
        <Box display="flex" p={5} alignItems="center" backgroundColor="#97ABFF" ml={5}>
            <Text fontSize={18} color="#ffff">
                Now
            </Text>
            <Image source={require("./test.png")} width="40px" height="40px" />
            <Text fontSize={18} color="#ffff">
                13ª
            </Text>
        </Box>
    )
}