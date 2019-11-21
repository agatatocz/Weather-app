import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { SearchBar } from "./SearchBar";
import "font-awesome/css/font-awesome.min.css";

export const cityList = [
  {
    name: "Wrocław",
    id: 1
  },
  {
    name: "Warszawa",
    id: 2
  },
  {
    name: "Kraków",
    id: 3
  }
];

const actions = {
  onChange: action("onChange"),
  onSubmit: e => {
    e.preventDefault();
    action("onSubmit")(e);
  }
};

storiesOf("SearchBar", module).add("default", () => (
  <SearchBar defaultCity={cityList[0].name} cityList={cityList} {...actions} />
));
