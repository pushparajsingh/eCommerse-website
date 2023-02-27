import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_SECRET_NAME,
  headers: {
    Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("Token"))}`,
    "Content-Type": "application/json",
  },
});
