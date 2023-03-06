import { Box, Image, Text } from "native-base"
import { TouchableOpacity, StyleSheet } from "react-native"

function Card(props: any) {
    return (
        <TouchableOpacity style={Styles.Container}>
            <Text fontSize={16} color="#ffff">
                {new Date(props.day * 1000).toLocaleDateString()}
            </Text>
            <Image source={require("./test.png")} width="40px" height="40px" />
            <Text fontSize={16} color="#ffff">
                {props.temp}º
            </Text>
        </TouchableOpacity>
    )
}

const Styles = StyleSheet.create({
    Container: {
        display: "flex",
        alignItems: "center",
        backgroundColor: "#97ABFF",
        marginLeft: 5,
        padding: 5,
        borderRadius: 20
    },
});

export default Card
