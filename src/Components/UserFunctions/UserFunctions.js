//User Funcs Component
// import modules
import axios from "axios";

// Exporting newUser Component
export const register = (newUser) => {
  // post request for register
  return axios
    .post("http://localhost:4040/users/register", {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email,
      password: newUser.password,
    })
    .then((response) => {
      console.log("Registered");
    })
    .catch((err) => {
      alert(" Email already used");
      console.log(err);
    });
};

// Exporting user Component
export const login = (user) => {
  // post request for login
  return axios
    .post("http://localhost:4040/users/login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      localStorage.setItem("usertoken", response.data);
      return response.data;
    })
    .catch((err) => {
      alert("Wrong Email or Password");
      console.log(err);
    });
};

// Exporting getProfile Component
export const getProfile = (user) => {
  return axios
    .get("http://localhost:4040/users/profile", {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
