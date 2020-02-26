import React from 'react';
import Select from 'react-select';

const searchOptions = [
  { value: 'city', label: 'City' },
  { value: 'name', label: 'Name' },
];


class AuthorsSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchable: true,
      value: null,
      options: props.authorsList,
      searchOption: props.searchOption,
      searchOptions: []
    };
    this.onChange = this.onChange.bind(this);
  }

  getSearchOptions() {
    const searchOptions = this.state.options
      .map(option => { return { 'value': option[this.state.searchOption], label: option[this.state.searchOption] }})
    this.setState({ searchOptions })
  }

  onChange(value) {
    this.setState({ value })
  }

  componentDidMount() {
    this.getSearchOptions()
  }

  render() {
    return (
      <div>
        <Select
          className="basic-single"
          classNamePrefix="select"
          defaultValue={searchOptions[0]}
          value={this.state.value}
          name="color"
          options={this.state.searchOptions}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default AuthorsSelect;