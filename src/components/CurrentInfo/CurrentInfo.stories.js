import React from "react";
import { storiesOf } from "@storybook/react";
import CurrentInfo from "./CurrentInfo";
import "font-awesome/css/font-awesome.min.css";

export const currentInfo = {
  city: "Wrocław",
  date: "2019-11-18",
  temperature: 14,
  pressure: 1007
};

storiesOf("CurrentInfo", module)
  .add("default", () => (
    <CurrentInfo
      currentCity={currentInfo.city}
      date={currentInfo.date}
      temperature={currentInfo.temperature}
      pressure={currentInfo.pressure}
    ></CurrentInfo>
  ))
  .add("loading", () => (
    <CurrentInfo
      loading={true}
      currentCity={currentInfo.city}
      date={currentInfo.date}
      temperature={currentInfo.temperature}
      pressure={currentInfo.pressure}
    ></CurrentInfo>
  ));
