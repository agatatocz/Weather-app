import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import cityList from "../../poland.json";

const Container = styled.div`
  width: fit-content;
  position: absolute;
  right: 1rem;
  top: 1rem;
  color: #333;
  border: 1px #999 solid;
  border-radius: 20px;
`;

export const Input = styled.input`
  background-color: transparent;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  padding: 0;
  padding: 0.6rem 0.1rem 0.6rem 1rem;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  padding: 0.6rem 1rem 0.6rem 0.1rem;
`;

const ID = "myDatalist";

export const SearchBar = ({ defaultCity, cityList, onChange, onSubmit }) => {
  return (
    <Container>
      <form onSubmit={onSubmit}>
        <Input
          list={ID}
          type="text"
          onChange={onChange}
          defaultValue={defaultCity}
        ></Input>
        <datalist id={ID}>
          {cityList.map(item => (
            <option value={item.name} key={item.id}></option>
          ))}
        </datalist>
        <Button type="submit">
          <i className="fa fa-search" />
        </Button>
      </form>
    </Container>
  );
};

SearchBar.propTypes = {
  defaultCity: PropTypes.string,
  cityList: PropTypes.array.isRequired,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};

const SearchBarWrapper = ({ defaultCity, setCurrentCity }) => {
  const [value, setValue] = React.useState(defaultCity);

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const validate = useCallback(
    () => !!cityList.find(item => item.name === value),
    [value]
  );

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      if (validate()) setCurrentCity(value);
    },
    [value, setCurrentCity, validate]
  );

  return (
    <SearchBar
      defaultCity={defaultCity}
      cityList={cityList}
      onChange={handleChange}
      onSubmit={handleSubmit}
    ></SearchBar>
  );
};

SearchBarWrapper.propTypes = {
  defaultCity: PropTypes.string,
  setCurrentCity: PropTypes.func
};

export default SearchBarWrapper;
