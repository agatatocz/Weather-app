import React from "react";
import "./App.css";
import AppScreen from "./components/AppScreen";
import { useWeatherData } from "./hooks/useWeatherData";

function App() {
  const [currentCity, setCurrentCity, forecastList, loading] = useWeatherData();

  return (
    <AppScreen
      currentCity={currentCity}
      setCurrentCity={setCurrentCity}
      forecastList={forecastList}
      loading={loading}
    />
  );
}

export default App;
