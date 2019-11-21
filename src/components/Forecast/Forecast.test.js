import React from "react";
import { shallow } from "enzyme";
import Forecast from "./Forecast";
import FutureTemperature from "../FutureTemperature/";
import { forecastList } from "./Forecast.stories";

describe("Forecast", () => {
  let component;

  beforeEach(() => {
    component = shallow(<Forecast forecastList={forecastList} />);
  });

  it("should render FutureTemperature for each item of forecastList", () => {
    expect(component.find(FutureTemperature)).toHaveLength(forecastList.length);
  });
});
