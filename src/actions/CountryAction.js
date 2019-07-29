import axios from "axios";

const API_CALL =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master";
const URL = `${API_CALL}/countries.json`;

export const fetchCountries = () => {
  return axios.get(URL).then(response => {
    return response.data;
  });
};
