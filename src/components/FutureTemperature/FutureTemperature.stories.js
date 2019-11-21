import React from "react";
import { storiesOf } from "@storybook/react";
import FutureTemperature from "./FutureTemperature";

export const temp = {
  hour: "12:00",
  date: "2019-11-18",
  temperature: 15,
  icon: "04d"
};
storiesOf("FutureTemperature", module).add("default", () => (
  <FutureTemperature {...temp}></FutureTemperature>
));
