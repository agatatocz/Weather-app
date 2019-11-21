import React from "react";
import PropTypes from "prop-types";
import CurrentInfo from "../CurrentInfo";
import Forecast from "../Forecast";
import SearchBar from "../SearchBar";

const AppScreen = ({ currentCity, setCurrentCity, forecastList, loading }) => {
  return forecastList.length ? (
    <div className="App">
      <SearchBar
        defaultCity={currentCity}
        setCurrentCity={setCurrentCity}
      ></SearchBar>
      <CurrentInfo
        loading={loading}
        currentCity={currentCity}
        date={forecastList[0].date}
        temperature={forecastList[0].temperature}
        pressure={forecastList[0].pressure}
      ></CurrentInfo>
      {loading || <Forecast forecastList={forecastList}></Forecast>}
    </div>
  ) : null;
};

AppScreen.propTypes = {
  currentCity: PropTypes.string,
  setCurrentCity: PropTypes.func,
  forecastList: PropTypes.array,
  loading: PropTypes.bool
};

export default AppScreen;
