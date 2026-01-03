// Constants
export const initialContactState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

// Validation Logic
export const validateContact = (contact) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return contact.name && emailRegex.test(contact.email) && contact.phone;
};
