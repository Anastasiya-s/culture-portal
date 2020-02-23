import React from 'react';

import Select from 'react-select';

const searchOptions = [
  { value: 'city', label: 'City' },
  { value: 'name', label: 'Name' },
];

class SearchOptionsSelect extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: null,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange({ value }) {
    this.setState({ selectedOption: value });
  }

  render() {
    return (
      <Select
        onChange={this.onChange}
        options={searchOptions}
      />
    );
  }
}

export default SearchOptionsSelect;