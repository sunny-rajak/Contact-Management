import axios from "axios";

const API = axios.create({
  baseURL: (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api",
});

export const fetchContacts = () => API.get("/contacts");
export const createContact = (newContact) => API.post("/contacts", newContact);
export const deleteContact = (id) => API.delete(`/contacts/${id}`);
