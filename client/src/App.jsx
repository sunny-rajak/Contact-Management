import React, { useState, useEffect, useCallback } from "react";
import ContactForm from "./features/ContactForm";
import ContactList from "./features/ContactList";
import { fetchContacts, createContact, deleteContact } from "./services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const getContacts = useCallback(async () => {
    try {
      const { data } = await fetchContacts();
      setContacts(data || []);
    } catch (err) {
      toast.error("Failed to fetch contacts. Please try again.");
    }
  }, []);

  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const validateContact = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.name && emailRegex.test(formData.email) && formData.phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(formData);
      setFormData({ name: "", email: "", phone: "", message: "" });
      getContacts();
      toast.success("Contact saved successfully!");
    } catch (err) {
      toast.error("Failed to save contact.");
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444", // Red color matches your delete button
      cancelButtonColor: "#3b82f6", // Blue color
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await deleteContact(id);
        getContacts();
        toast.warn("Contact deleted successfully.");
      } catch (err) {
        toast.error("Failed to delete contact.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6 font-sans text-slate-800">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />

      <div className="max-w-6xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight mb-2">
            Contact<span className="text-blue-600">Manager</span>
          </h1>
          <p className="text-slate-500">
            Keep your connections organized and accessible.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4 sticky top-8">
            <ContactForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
              isValid={validateContact()}
            />
          </div>
          <div className="lg:col-span-8">
            <ContactList contacts={contacts} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
