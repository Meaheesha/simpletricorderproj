import React, { Component } from "react";
import Select from "react-select";

class FilterSelectOption extends Component {
  render() {
    const { data, selectedItem, handleChange } = this.props;

    return (
      <div>
        <Select options={data} value={selectedItem} onChange={handleChange} />
      </div>
    );
  }
}

export default FilterSelectOption;
