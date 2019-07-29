import axios from "axios";

const API_CALL =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master";
const URL = `${API_CALL}/cities.json`;

export const fetchCities = () => {
  return axios.get(URL).then(response => {
    return response.data;
  });
};
