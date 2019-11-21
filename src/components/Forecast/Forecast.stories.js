import React from "react";
import { storiesOf } from "@storybook/react";
import Forecast from "./Forecast";

export const forecastList = [
  {
    hour: "12:00",
    date: "2019-11-18",
    temperature: 15,
    pressure: 1020,
    icon: "04d"
  },
  {
    hour: "15:00",
    date: "2019-11-18",
    temperature: 13,
    pressure: 1000,
    icon: "10d"
  },
  {
    hour: "18:00",
    date: "2019-11-18",
    temperature: 11,
    pressure: 1010,
    icon: "11d"
  }
];

storiesOf("Forecast", module).add("default", () => (
  <Forecast forecastList={forecastList}></Forecast>
));
