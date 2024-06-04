import axios from "axios";
import { FieldValues } from "react-hook-form";

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getProducts = () => axios.get(`${API_URL}/products`);

export const addProduct = (product: FieldValues) =>
  axios.post(`${API_URL}/products`, product);

export const deleteProduct = (id: number) =>
  axios.delete(`${API_URL}/products/${id}`);

export const updateProduct = (id: string, product: FieldValues) =>
  axios.patch(`${API_URL}/products/${id}`, product);
