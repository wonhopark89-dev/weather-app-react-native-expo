import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Alert } from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import Weather from "./Weather";
import { StatusBar } from "expo-status-bar";

const API_KEY = "58d07c2d6dade6e696cf17aaf7951f56";

export default function Loading() {
  const [isLoading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [temp, setTemp] = useState(0);
  const [weatherData, setWeatherData] = useState({});

  const getLocation = async () => {
    try {
      setLoading(true);
      await Location.requestPermissionsAsync();
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({
        LocationOptions: Location.Accuracy.BestForNavigation,
      });
      // console.log(latitude, longitude);
      setLatitude(latitude);
      setLongitude(longitude);
    } catch (error) {
      Alert.alert("Can`t find you", "So sad...");
    }
  };

  const getWeatherData = async () => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric&lang=kr`
    );
    console.log(data);
    setTemp(data.main.temp);
    setWeatherData(data);
    setLoading(false);
  };

  useEffect(() => {
    getLocation();
    getWeatherData();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar/>
      {isLoading ? (
        <Text style={styles.text}>Getting The Weather...</Text>
      ) : (
        <Weather weatherData={weatherData} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  text: {
    paddingHorizontal: 30,
    paddingVertical: 100,
    color: "#2c2c2c",
    fontSize: 30,
  },
});
