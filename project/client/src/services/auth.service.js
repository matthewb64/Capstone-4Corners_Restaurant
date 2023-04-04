import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(email, password) { // authenticate service login method
    return axios
      .post(API_URL + "signin", { // request to server api
        email: email,
        password: password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data)); // set signed in user from response
        }
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user"); // remove signed user
  }

  register(email, password) { // authenticate service register method
    return axios.post(API_URL + "signup", { // request to server api
      email: email,
      password: password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user')); // get current signed user
  }
}

export default new AuthService();