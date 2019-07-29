import axios from "axios";

const API_CALL =
  "https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master";
const URL = `${API_CALL}/states.json`;

export const fetchStates = () => {
  return axios.get(URL).then(response => {
    return response.data;
  });
};
