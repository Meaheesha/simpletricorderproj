import React, { Component } from "react";
import Button from "terra-button";
import { fetchCountries } from "../actions/CountryAction";
import { fetchStates } from "../actions/StateAction";
import { fetchCities } from "../actions/CityAction";
import FilterSelectOption from "../components/FilterSelectOption";

let countriesList = [];
let statesList = [];
let citiesList = [];

class FilterSelectOptionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      states: [],
      cities: [],
      selectedCountry: 0,
      selectedState: 0,
      selectedCity: 0
    };
  }

  //Country dropdown change handler
  countryChangeHandler = selectedCountry => {
    this.setState({ selectedCountry });
  };

  //State dropdown change handler
  stateChangeHandler = selectedCountry => {
    this.setState({ selectedState: selectedCountry });
  };

  //City dropdown change handler
  cityChangeHandler = selectedState => {
    this.setState({ selectedCity: selectedState });
  };

  //Get data from action
  componentDidMount() {
    //Fetch Countries
    fetchCountries().then(response => {
      for (var i = 0; i < response.length; i++) {
        countriesList.push({
          label: response[i].name,
          value: response[i].id
        });
      }
      this.setState({ countries: countriesList });
    });

    //Fetch States
    fetchStates().then(response => {
      for (var i = 0; i < response.length; i++) {
        statesList.push({
          label: response[i].name,
          value: response[i].id,
          link: response[i].country_id
        });
      }
      this.setState({ states: statesList });
    });

    //Fetch Cities
    fetchCities().then(response => {
      for (var i = 0; i < response.length; i++) {
        citiesList.push({
          label: response[i].name,
          value: response[i].id,
          link: response[i].state_id
        });
      }
      this.setState({ cities: citiesList });
    });
  }
  ResetFilters = () => {
    this.setState({
      selectedCountry: 0,
      selectedState: 0,
      selectedCity: 0
    });
  };
  applyFilters = () => {};
  render() {
    //Filter States based on Selected Country
    const filteredStates = statesList.filter(
      o => o.link === this.state.selectedCountry.value
    );

    //Filter Cities based on Selected State
    const filteredCities = citiesList.filter(
      o => o.link === this.state.selectedState.value
    );

    return (
      <div>
        <h4>Select Country</h4>
        <FilterSelectOption
          data={countriesList}
          selectedItem={this.state.selectedCountry}
          handleChange={this.countryChangeHandler}
        />
        <br />
        <h4>Select State</h4>
        <FilterSelectOption
          data={filteredStates}
          selectedItem={this.state.selectedState}
          handleChange={this.stateChangeHandler}
        />
        <br />
        <h4>Select City</h4>
        <FilterSelectOption
          data={filteredCities}
          selectedItem={this.state.selectedCity}
          handleChange={this.cityChangeHandler}
        />
        <br />
        <Button
          className="analysis-results-filter-apply-button"
          variant="emphasis"
          text="Apply"
          onClick={this.applyFilters}
        />
        <Button
          className="analysis-results-filter-apply-button"
          variant="emphasis"
          text="Reset"
          onClick={this.ResetFilters}
        />
      </div>
    );
  }
}

export default FilterSelectOptionContainer;
