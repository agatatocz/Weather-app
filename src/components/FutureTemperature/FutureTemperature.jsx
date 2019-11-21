import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  from{
    opacity: 0;
    transform: scale(0.4);
  }
  to{
    opacity: 1,
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 8rem;
  height: fit-content;
  background-color: rgba(200, 200, 200, 0.6);
  border-radius: 15px;
  margin: 1rem;
  animation: ${animation} 0.8s linear;
`;
const Hour = styled.h2`
  margin: 0;
`;
const Date = styled.p`
  margin: 0;
`;
const Temperature = styled.h1`
  margin: 3px;
`;

const FutureTemperature = ({ date, hour, temperature, icon }) => {
  return (
    <Wrapper>
      <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""></img>
      <Hour>{hour}</Hour>
      <Date>{date}</Date>
      <Temperature>{temperature}&#xb0;C</Temperature>
    </Wrapper>
  );
};

FutureTemperature.propTypes = {
  date: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  icon: PropTypes.string
};

export default FutureTemperature;
