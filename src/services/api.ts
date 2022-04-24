import axios from "axios";

const baseURL = process.env.BASE_URL;

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
  return route.post("/auth/register", formData);
};

async function signIn(formData: FormData) {
  return route.post<Auth>("/auth/login", formData);
};

const api = {
  signUp,
  signIn,
};

export default api;