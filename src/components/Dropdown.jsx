import React, { useState } from "react";

const Dropdown = ({ label, placeholder, options = [] }) => {
  const [value, setValue] = useState("");
  return (
    <div className="mb-4">
      <p className="font-medium text-sm text-[#09090B] mb-1">
        {label} <span className="text-[#DC2626]">*</span>
      </p>
      <select
        placeholder={placeholder}
        required
        className="border border-[#E4E4E7] rounded-md w-full h-[50px] px-3 py-2.5"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      >
        {options.map((option) => {
          return (
            <option value={option} key={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Dropdown;
