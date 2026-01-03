// Imports
import React from "react";
import Button from "./Button";

// Component Definition
const ContactCard = ({ contact, onDelete }) => {
  // Render
  return (
    <li className="bg-slate-50 p-4 rounded-xl border border-slate-200 hover:shadow-md transition-shadow duration-200 flex flex-col justify-between h-full group">
      <div className="mb-4">
        <p className="font-bold text-lg text-slate-800 mb-1">{contact.name}</p>
        <p className="text-sm text-slate-600 font-medium mb-2">
          {contact.email} | {contact.phone}
        </p>
        <p className="text-sm text-slate-500 bg-white p-2 rounded border border-slate-100 italic">
          {contact.message || "No message provided."}
        </p>
      </div>
      <Button
        onClick={() => onDelete(contact._id)}
        className="bg-red-500 hover:bg-red-600 text-sm w-full opacity-90 hover:opacity-100"
      >
        Delete
      </Button>
    </li>
  );
};

export default ContactCard;
