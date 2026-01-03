import React from "react";
import InputField from "../components/InputField";
import Button from "../components/Button";

const ContactForm = ({ formData, setFormData, handleSubmit, isValid }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
      <h2 className="text-xl font-bold mb-6 text-slate-800 border-b pb-2">
        Add New Contact
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputField
          placeholder="Name (Required)"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <InputField
          placeholder="Email (Valid Email Required)"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <InputField
          placeholder="Phone (Required)"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          required
        />
        <InputField
          placeholder="Message (Optional)"
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          isTextArea
        />
        <Button
          type="submit"
          disabled={!isValid}
          className={`w-full ${
            isValid
              ? "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
