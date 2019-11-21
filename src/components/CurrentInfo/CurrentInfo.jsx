import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../Loader/";

const Wrapper = styled.div`
  padding: 4rem 1rem;
`;
const City = styled.h1`
  margin: 0;
  font-size: 2.5rem;
`;
const Date = styled.h2`
  margin: 0;
`;
const SectionWrapper = styled.div`
  text-align: center;
`;
const Text = styled.p`
  margin: 0;
  font-size: 1.7rem;
`;
const Temperature = styled.h1`
  margin: 0;
  font-size: 3rem;
`;
const Pressure = styled.h1`
  margin: 0;
`;

const CurrentInfo = ({ loading, currentCity, date, temperature, pressure }) => {
  return (
    <Wrapper>
      <SectionWrapper>
        <City>{currentCity}</City>
        <Date>{date}</Date>
      </SectionWrapper>
      <SectionWrapper>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Text>Teraz</Text>
            <Temperature>{temperature}&#xb0;C</Temperature>
            <Pressure>{pressure}hPa</Pressure>
          </>
        )}
      </SectionWrapper>
    </Wrapper>
  );
};

CurrentInfo.propTypes = {
  currentCity: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  temperature: PropTypes.number.isRequired,
  pressure: PropTypes.number.isRequired
};

export default CurrentInfo;
