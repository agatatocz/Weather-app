import React from "react";
import { shallow } from "enzyme";
import { SearchBar, Input } from "./SearchBar";
import { cityList } from "./SearchBar.stories";

const handleChange = jest.fn();
const handleSubmit = jest.fn();

describe("SearchBar", () => {
  let component;

  beforeEach(() => {
    component = shallow(
      <SearchBar
        defaultCity={cityList[0].name}
        cityList={cityList}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    );
  });

  it("should call handleSubmit method on form submit", () => {
    component.find("form").simulate("submit");
    expect(handleSubmit).toHaveBeenCalled();
  });

  it("should call handleChange method on input change", () => {
    component.find(Input).simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });
  it("should render all options in datalist", () => {
    expect(component.find("option")).toHaveLength(cityList.length);
  });
});
