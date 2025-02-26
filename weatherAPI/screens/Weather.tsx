// screens/Weather.tsx
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View, useWindowDimensions } from 'react-native';
import WeatherCard from '../Components/WeatherCard';

type ForecastDay = {
  date: string;
  maxTemp: number;
  minTemp: number;
  rainProbability: number;
  condition: string;
  icon: string;
};

const Weather = () => {
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [loading, setLoading] = useState(true);
  const { height } = useWindowDimensions();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = 'c2835de09054f7c57d19bd54ea7e6c1f';
        const lat = 21.1397;
        const lon = -98.4195;
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        const processedData = processForecastData(data.list);
        setForecast(processedData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching weather:', error);
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  const processForecastData = (list: any[]): ForecastDay[] => {
    const forecastMap = new Map<string, ForecastDay>();
    
    list.forEach((item) => {
      const date = item.dt_txt.split(' ')[0];
      const currentData = forecastMap.get(date) || {
        date,
        maxTemp: -Infinity,
        minTemp: Infinity,
        rainProbability: 0,
        condition: '',
        icon: '',
      };

      forecastMap.set(date, {
        date,
        maxTemp: Math.max(currentData.maxTemp, item.main.temp_max),
        minTemp: Math.min(currentData.minTemp, item.main.temp_min),
        rainProbability: Math.max(currentData.rainProbability, item.pop * 100),
        condition: item.weather[0].description,
        icon: item.weather[0].icon,
      });
    });

    return Array.from(forecastMap.values()).slice(0, 5);
  };

  const containerHeight = height * 0.6; // Ajustar según necesidades

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={forecast}
        renderItem={({ item }) => <WeatherCard {...item} />}
        keyExtractor={(item) => item.date}
        numColumns={2}
        contentContainerStyle={[styles.listContainer, { height: containerHeight }]}
        scrollEnabled={false}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'space-around',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Weather;