import { useState } from "react"
import { Box, Center, Image, Text } from "native-base"
import {
    TouchableOpacity, LayoutAnimation, StyleSheet, Animated,
    Easing
} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import MapView from "react-native-maps"
import Map from "../maps";

function Detail(props: any) {
    const [isExpanded, setIsExpanded] = useState(false);
    const height = isExpanded ? "80%" : "25%";
    const animate = () => {
        setIsExpanded(!isExpanded);
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    };

    return (
        <Animated.View style={[Styles.Container, { height }]}>
            <Center>
                <TouchableOpacity style={Styles.HandlerButton} onPress={animate}>
                    <Box style={Styles.Image} >
                        {isExpanded ? <MaterialCommunityIcons name="arrow-down-drop-circle" size={24} color="#ffff" /> : <MaterialCommunityIcons name="arrow-up-drop-circle" size={24} color="#ffff" />}
                    </Box>
                </TouchableOpacity>
            </Center>
            <Box style={Styles.Card}>
                <Image source={require("./sun.png")} />
                <Box style={Styles.content}>
                    <Text fontSize={18} color="#ffff">
                        Nascer do sol
                    </Text>
                    <Text fontSize={18} color="#ffff">
                        {new Date(props.sunrise * 1000).toLocaleTimeString()} AM
                    </Text>
                </Box>
                <Box style={Styles.content}>
                    <Text fontSize={18} color="#ffff">
                        Por do sol
                    </Text>
                    <Text fontSize={18} color="#ffff">
                        {new Date(props.sunset * 1000).toLocaleTimeString()}PM
                    </Text>
                </Box>
            </Box>
            <Box style={Styles.Card2} >
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" alignItems="center">
                    <Text fontSize={16} color="#ffff">Sumario</Text>
                    <Text fontSize={16} color="#ffff">03 Março</Text>
                </Box>
                <Box display="flex" flexDirection="row" justifyContent="space-between" width="100%" alignItems="center" mt={5}>
                    <Box style={Styles.Card2Content}>
                        <Image source={require("./1.png")} />
                        <Text fontSize={16} color="#ffff">
                            Nuvens
                        </Text>
                        <Text fontSize={16} color="#ffff">
                            24%
                        </Text>
                    </Box>
                    <Box style={Styles.Card2Content}>
                        <Image source={require("./2.png")} />
                        <Text fontSize={16} color="#ffff">
                            Vento
                        </Text>
                        <Text fontSize={16} color="#ffff">
                            20km/h
                        </Text>
                    </Box>
                    <Box style={Styles.Card2Content}>
                        <Image source={require("./3.png")} />
                        <Text fontSize={16} color="#ffff">
                            Humidade
                        </Text>
                        <Text fontSize={16} color="#ffff">
                            10%
                        </Text>
                    </Box>
                </Box>
                <Map />
            </Box>
        </Animated.View>
    )
}

const Styles = StyleSheet.create({
    Container: {
        backgroundColor: "#97ABFF",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderTopEndRadius: 80,
        borderTopStartRadius: 80,
        paddingHorizontal: 20
    },
    HandlerButton: {
        top: -25,
        backgroundColor: "#123597",
        height: 60,
        width: 60,
        borderRadius: 60,
        zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Image: {
        height: 40,
        width: 40,
        borderRadius: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    Card: {
        backgroundColor: "#758be0",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderRadius: 20
    },
    Card2: {
        backgroundColor: "#758be0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        borderRadius: 20,
        marginTop: 10
    },
    content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    Card2Content: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});
export default Detail;
