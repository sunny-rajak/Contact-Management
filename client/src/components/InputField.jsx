import React from "react";

const InputField = ({
  placeholder,
  value,
  onChange,
  type = "text",
  required = false,
  isTextArea = false,
}) => {
  const className =
    "w-full border border-slate-200 bg-slate-50 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 text-sm";

  return isTextArea ? (
    <textarea
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  ) : (
    <input
      className={className}
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

export default InputField;
