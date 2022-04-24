import axios from "axios";

const baseURL = process.env.REACT_APP_API;
console.log(baseURL)
const route = axios.create({
  baseURL
});

interface FormData {
  email: string
  password: string
  confirmPassword?: string
}

export interface Auth {
  token: string
}

async function signUp(formData: FormData) {
  return route.post("/users", formData);
};

async function signIn(formData: FormData) {
  return route.post<Auth>("/users/login", formData);
};

const api = {
  signUp,
  signIn,
};

export default api;