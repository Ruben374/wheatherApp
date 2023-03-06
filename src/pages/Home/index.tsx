import { Box, Text, Image, Button } from "native-base"
import { TouchableOpacity, FlatList } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome5 } from '@expo/vector-icons';
import Card from "../../components/Card";
import Detail from "../../components/Detail";
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';
const key = "d6923e7a2a6f4109b7c3d3c1bbf86eab"
export default function Home() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [locationName, setLocationName] = useState<any>(null);
    const [data, setData] = useState<any>(null)

    useEffect(() => {
        async function getData() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            const lat = location.coords.latitude
            const lon = location.coords.longitude
            /*     await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
                    .then(response => {
                        const result = response.data;
                        const province = result.address.state;
                        setLocationName(province);
                    })
                    .catch(error => {
                        console.log(error);
                    }); */
            await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt&appid=${key}`).then(response => {

                setData(response.data)
                setLocationName(response.data.name);
            })
            await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt&appid=${key}`).then(response => {
                setForecast(response.data.list)
            })

        };
        getData()
    }, [])

    return (

        <LinearGradient
            colors={['#97ABFF', '#123597']}
            style={{
                flex: 1,

            }}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0.9 }}
        >

            {
                data &&
                <>
                    <Box display="flex" alignItems="center" mt={20}>
                        <Text color="#ffff" fontSize={45}>{locationName}</Text>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
                            <FontAwesome5 name="map-marker-alt" size={16} color="#ffff" />
                            <Text fontSize={16} color="#ffff">
                                Current Location
                            </Text>
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={1} >
                            <Image source={require("./test.png")} alt="Alternate Text" width="80px" height="80px" />
                            <Text fontSize={50} color="#ffff">
                                {data.main.temp}º
                            </Text>
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={2}>
                            <Text color="#ffff" fontSize={17}>
                                {data.weather[0].description}{" "}-
                            </Text>
                            <Text color="#ffff" fontSize={17}>
                                Max:{data.main.temp_max}º
                            </Text>
                            <Text color="#ffff" fontSize={17}>
                                Min:{data.main.temp_min}º
                            </Text>
                        </Box>
                        <Box display="flex" flexDirection="row" alignItems="center" gap={3}>
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
                                data={forecast}
                                renderItem={({ item, index }) => (
                                    <Card day={item.dt} temp={item.main.temp}/>
                                )}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </Box>

                    </Box>
                    <Detail sunset={data.sys.sunset} sunrise={data.sys.sunrise} />

                </>
            }
        </LinearGradient>

    )
}