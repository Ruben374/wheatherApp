import React from "react"
import { Box, Center, Text, StatusBar, Image, ScrollView, Button } from "native-base"
import { TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import Card from "../../components/Card";

export default function Home() {
    return (

        <LinearGradient
            colors={['#97ABFF', '#123597']}
            style={{
                flex: 1,

            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.9 }}
        >
            <Box display="flex" alignItems="center" mt={10}>
                <Text color="#ffff" fontSize={48}>Luanda</Text>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                    <FontAwesome5 name="map-marker-alt" size={20} color="#ffff" />
                    <Text fontSize={20} color="#ffff">
                        Current Location
                    </Text>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" gap={1} >
                    <Image source={require("./test.png")} alt="Alternate Text" size="xl" />
                    <Text fontSize={100} color="#ffff">
                        13º
                    </Text>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                    <Text color="#ffff" fontSize={20}>
                        Tempo nublado -
                    </Text>
                    <Text color="#ffff" fontSize={20}>
                        H:17º
                    </Text>
                    <Text color="#ffff" fontSize={20}>
                        L:4ª
                    </Text>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center" gap={3} mt={5}>
                    <Button borderRadius={15} backgroundColor="#97ABFF" width="100px">
                        <Text color="#ffff" fontSize={18}>Daily</Text>
                    </Button>
                    <Button borderRadius={15} backgroundColor="#123597" width="100px">
                        <Text color="#ffff" fontSize={18}>Weekly</Text>
                    </Button>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="center">
                    <FlatList
                        style={{ marginTop: 10 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={[6, 7, 6, 7, 7, 7, 7,]}
                        renderItem={({ item, index }) => (
                            <Card />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </Box>
            </Box>
        </LinearGradient>

    )
}