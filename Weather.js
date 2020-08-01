import React from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Weather({ weatherData }) {
  console.log("?? ", weatherData);
  const {
    main: { feels_like, humidity, temp, temp_max, temp_min },
  } = weatherData;

  const {
    wind: { speed },
  } = weatherData;
  const { weather } = weatherData;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <LinearGradient colors={["#4DA0B0", "#D39D38"]} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>현재날씨</Text>
          <Text style={styles.value}>{weather[0].description}</Text>
          <Image
            style={{ width: 100, height: 110 }}
            source={{
              uri: `http://openweathermap.org/img/wn/${weather[0].icon}.png`,
            }}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.value}>체감온도 {Math.round(feels_like)}℃</Text>
          <Text style={styles.value}>현재온도 {Math.round(temp)}℃</Text>
          <Text style={styles.value}>습도 {humidity}%</Text>
          <Text style={styles.value}>바람 {speed}m/s</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "300",
  },
  value: {
    fontSize: 30,
    fontWeight: "300",
  },
});

// Object {
//   "base": "stations",
//   "clouds": Object {
//     "all": 0,
//   },
//   "cod": 200,
//   "coord": Object {
//     "lat": 0,
//     "lon": 0,
//   },
//   "dt": 1596264850,
//   "id": 6295630,
//   "main": Object {
//     "feels_like": 24.62,
//     "humidity": 96,
//     "pressure": 984,
//     "temp": 23.16,
//     "temp_max": 23.89,
//     "temp_min": 21.67,
//   },
//   "name": "Globe",
//   "sys": Object {
//     "id": 2008684,
//     "sunrise": 1596261765,
//     "sunset": 1596305384,
//     "type": 3,
//   },
//   "timezone": 0,
//   "visibility": 10000,
//   "weather": Array [
//     Object {
//       "description": "clear sky",
//       "icon": "01d",
//       "id": 800,
//       "main": "Clear",
//     },
//   ],
//   "wind": Object {
//     "deg": 161,
//     "speed": 5,
//   },
// }
