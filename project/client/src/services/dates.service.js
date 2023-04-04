import axios from "axios";

const API_URL = "http://localhost:8080/api/dates/";

class DatesService {
  async dates() { // asynchronous method for getting request to server`s api
    const response = await axios.get(API_URL + "dates");

    return response.data;
  }
}

export default new DatesService();