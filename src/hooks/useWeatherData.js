import { useState, useEffect } from "react";
import axios from "axios";

const defaultCity = "Wrocław";
const countryCode = "PL";
const APIKEY = "f529eaa49f204a0759650f957a115bc5";

const mapList = list =>
  list
    .map(item => ({
      hour: item.dt_txt.substr(11, 5),
      date: item.dt_txt.substr(0, 10),
      temperature: Math.round(item.main.temp),
      pressure: item.main.pressure,
      icon: item.weather[0].icon
    }))
    .slice(0, 8);

export const useWeatherData = () => {
  const [currentCity, setCurrentCity] = useState(defaultCity);
  const [forecastList, setForecastList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${currentCity},${countryCode}&units=metric&APPID=${APIKEY}`
      )
      .then(({ data }) => {
        const mappedList = mapList(data.list);
        setForecastList(mappedList);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [currentCity]);

  return [currentCity, setCurrentCity, forecastList, loading];
};
