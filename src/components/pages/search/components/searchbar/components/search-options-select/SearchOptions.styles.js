import styled from 'styled-components';

export const selectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid grey",
    color: state.isSelected ? "blue" : "",
    fontSize: 16,
    backgroundColor: state.isSelected ? "#eee" : "",
    textAlign: "left",
    cursor: "pointer"
  }),
  container: base => ({
    ...base,
    width: 100,
  }),
  control: base => ({
    ...base,
    height: 32,
    minHeight: 32,
    fontSize: 16,
    borderRadius: 4,
    width: "100%",
    textAlign: "left",
    cursor: "pointer"
  }),
  dropdownIndicator: base => ({
    ...base,
    display: "none"
  }),
  indicatorSeparator: base => ({
    ...base,
    display: "none"
  }),
  valueContainer: base => ({
    ...base,
    padding: 0,
    paddingLeft: 2
  })
};

export const labelStyles = {
  fontSize: 16,
  paddingTop: 8,
  marginRight: 5,
  width: 100,
  textAlign: "right"
};

export const Container = styled.div`
  display: flex;
  flex-flow: row no-wrap;
`;