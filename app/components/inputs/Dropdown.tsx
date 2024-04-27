import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface DropdownOption {
  label: string;
  value: string;
}

interface DropdownProps {
  id: string;
  label: string;
  options: DropdownOption[];
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  onChange: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  id,
  label,
  options,
  disabled,
  register,
  required,
  errors,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-2">
      <label
        htmlFor={id}
        className="block text-l py-4 font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          className={`
            block
            w-full
            pl-3
            pr-10
            py-4
            text-base
            border-gray-300
            focus:outline-none focus:ring-indigo-500 focus:border-indigo-500
            sm:text-sm
            rounded-md
            ${errors[id] ? "border-red-500" : ""}
          `}
          {...register(id, {
            required: required ? "This field is required" : false,
          })}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        >
          <option value="" disabled>
            Select an option
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors[id] && (
          <p className="mt-1 text-sm text-red-500 absolute">
            {errors[id].message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
