// Components/WeatherCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type WeatherCardProps = {
  date: string;
  maxTemp: number;
  minTemp: number;
  rainProbability: number;
  condition: string;
  icon: string;
};

const WeatherCard = ({
  date,
  maxTemp,
  minTemp,
  rainProbability,
  condition,
  icon,
}: WeatherCardProps) => {
  const getBackgroundColor = (temp: number) => {
    if (temp < 20) return "#87CEEB";
    if (temp >= 21 && temp <= 30) return "#FFD700";
    return "#FFA500";
  };

  const formatDate = (dateString: string) => {
    const dateObj = new Date(dateString);
    const day = dateObj.toLocaleDateString("es-ES", { weekday: "long" });
    const formattedDate = `${dateObj.getDate().toString().padStart(2, "0")}/${(
      dateObj.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${dateObj.getFullYear()}`;
    return { day, formattedDate };
  };

  const { day, formattedDate } = formatDate(date);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: getBackgroundColor(maxTemp) },
      ]}
    >
      <Text style={styles.dayText}>{day}</Text>
      <Text style={styles.dateText}>{formattedDate}</Text>
      <Image
        source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` }}
        style={styles.icon}
      />
      <Text style={styles.tempText}>Max: {Math.round(maxTemp)}°C</Text>
      <Text style={styles.tempText}>Min: {Math.round(minTemp)}°C</Text>
      <Text style={styles.rainText}>
        Lluvia: {Math.round(rainProbability)}%
      </Text>
      <Text style={styles.conditionText}>{condition}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  dayText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    marginBottom: 5,
  },
  icon: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  tempText: {
    fontSize: 16,
    marginVertical: 2,
  },
  rainText: {
    fontSize: 14,
    marginTop: 5,
  },
  conditionText: {
    fontSize: 14,
    marginTop: 5,
    textTransform: "capitalize",
  },
});

export default WeatherCard;
