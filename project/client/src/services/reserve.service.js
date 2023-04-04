import axios from "axios";

const API_URL = "http://localhost:8080/api/reserve/";

class ReserveService { // reservation service for requesting to server`s API
  reserve(date, time, datetime, restaurant, user_id, guests_number, occasion, guest_name, guest_surname, guest_email, guest_phone, credit_number) {
    return axios
      .post(API_URL + "reserve", {
        date: date,
        time: time,
        datetime: datetime,
        restaurant: restaurant,
        user_id: user_id,
        guests_number: guests_number,
        occasion: occasion,
        guest_name: guest_name,
        guest_surname: guest_surname,
        guest_email: guest_email,
        guest_phone: guest_phone,
        credit_number: credit_number
      })
      .then(response => {
        return response.data;
      });
  }
  async unreserve(id) { // in case if you want in future unreservation
    return axios
      .post(API_URL + "unreserve", {
        id: id
      })
      .then(response => {
        return response.data;
      })
  }
  async getReservation(user_id){ // get reservations for selected user

    const response = await axios.post(API_URL + "getreservation", {
        user_id: user_id,
    });

    return response.data;
  }
}

export default new ReserveService();