import axios from "axios";

const Token = localStorage.getItem("Token");
console.log(Token);
export const instance = axios.create({
  baseURL: process.env.REACT_APP_SECRET_NAME,
  headers: {
    Authorization: `Bearer ${Token !== "undefined" ? JSON.parse(Token) : ""}`,
    "Content-Type": "application/json",
  },
});
