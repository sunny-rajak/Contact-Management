import React from "react";

const ContactList = ({ contacts, handleDelete }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 min-h-[400px] overflow-x-auto">
      <h2 className="text-xl font-bold mb-6 text-slate-800 border-b pb-2">
        Your Contacts ({contacts.length})
      </h2>
      {contacts.length === 0 ? (
        <p className="text-slate-500 text-center py-8">No contacts found.</p>
      ) : (
        <>
          <table className="w-full text-left border-collapse hidden md:table">
            <thead>
              <tr className="text-slate-500 border-b border-slate-200 text-sm uppercase tracking-wider">
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Phone</th>
                <th className="py-3 px-4 font-semibold">Message</th>
                <th className="py-3 px-4 font-semibold text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-slate-900">
                    {contact.name}
                  </td>
                  <td className="py-3 px-4">{contact.email}</td>
                  <td className="py-3 px-4">{contact.phone}</td>
                  <td className="py-3 px-4 text-slate-500 italic truncate max-w-xs">
                    {contact.message || "—"}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <button
                      onClick={() => handleDelete(contact._id)}
                      className="text-red-500 hover:text-red-700 font-medium hover:underline transition-colors"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View (Cards) */}
          <div className="md:hidden space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact._id}
                className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col gap-2"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-bold text-slate-900">{contact.name}</p>
                    <p className="text-sm text-slate-600">{contact.email}</p>
                    <p className="text-sm text-slate-600">{contact.phone}</p>
                  </div>
                  <button
                    onClick={() => handleDelete(contact._id)}
                    className="text-red-500 hover:text-red-700 font-medium text-sm"
                  >
                    Delete
                  </button>
                </div>
                {contact.message && (
                  <p className="text-xs text-slate-500 italic bg-white p-2 rounded border border-slate-100">
                    {contact.message}
                  </p>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ContactList;
