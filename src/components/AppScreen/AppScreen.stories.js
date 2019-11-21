import React from "react";
import { storiesOf } from "@storybook/react";
import AppScreen from "./AppScreen";
import { forecastList } from "../Forecast/Forecast.stories";
import { action } from "@storybook/addon-actions";

const currentCity = "Wrocław";
const setCurrentCity = action("setCurrentCity");

storiesOf("AppScreen", module)
  .add("default", () => (
    <AppScreen
      currentCity={currentCity}
      setCurrentCity={setCurrentCity}
      forecastList={forecastList}
      loading={false}
    ></AppScreen>
  ))
  .add("loading", () => (
    <AppScreen
      currentCity={currentCity}
      setCurrentCity={setCurrentCity}
      forecastList={forecastList}
      loading={true}
    ></AppScreen>
  ));
