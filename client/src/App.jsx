import React, { useState, useEffect, useCallback } from "react";
import { fetchContacts, createContact } from "./api";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [error, setError] = useState("");

  const getContacts = useCallback(async () => {
    try {
      const { data } = await fetchContacts();
      setContacts(data || []);
    } catch (err) {
      console.error("Failed to fetch contacts", err);
    }
  }, []);

  // Fetch contacts on load
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  // Client-side validation logic
  const isValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formData.name && emailRegex.test(formData.email) && formData.phone;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createContact(formData);
      setFormData({ name: "", email: "", phone: "", message: "" }); // Clear form
      getContacts(); // Refresh list without reload
      alert("Contact saved successfully!");
    } catch (err) {
      setError("Failed to save contact.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 font-sans">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form Section */}
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4">Add Contact</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              className="w-full border p-2 rounded"
              placeholder="Name (Required)"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="Email (Valid Email Required)"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              className="w-full border p-2 rounded"
              placeholder="Phone (Required)"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              required
            />
            <textarea
              className="w-full border p-2 rounded"
              placeholder="Message (Optional)"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
            <button
              disabled={!isValid()}
              className={`w-full p-2 rounded text-white ${
                isValid() ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact List Section */}
        <div className="bg-white p-6 rounded shadow-md overflow-auto max-h-[500px]">
          <h2 className="text-xl font-bold mb-4">Contact List</h2>
          <ul className="space-y-4">
            {contacts.map((c) => (
              <li key={c._id} className="border-b pb-2">
                <p className="font-semibold">{c.name}</p>
                <p className="text-sm text-gray-600">
                  {c.email} | {c.phone}
                </p>
                <p className="text-xs italic text-gray-500">{c.message}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
