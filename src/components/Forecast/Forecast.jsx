import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FutureTemperature from "../FutureTemperature/";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Forecast = ({ forecastList }) => {
  return (
    <Wrapper>
      {forecastList.map(item => (
        <FutureTemperature
          key={`${item.date}${item.hour}`}
          hour={item.hour}
          date={item.date}
          temperature={item.temperature}
          icon={item.icon}
        ></FutureTemperature>
      ))}
    </Wrapper>
  );
};

Forecast.propTypes = {
  forecastList: PropTypes.arrayOf(
    PropTypes.shape({
      hour: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      temperature: PropTypes.number.isRequired,
      icon: PropTypes.string
    })
  ).isRequired
};

export default Forecast;
