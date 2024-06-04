import axios from "axios";
import { Comment } from "../interfaces/product";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const addComment = (data: Comment) =>
  axios.post(`${API_URL}/comments`, data);
