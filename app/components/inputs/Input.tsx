import React from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";
import { FiPercent } from "react-icons/fi";
import { MdOutlineNumbers } from "react-icons/md";

interface InputProps {
  id: string;
  label: string;
  type?: "text" | "number" | "percentage";
  disabled?: boolean;
  formatDollar?: boolean;
  formatPercentage?: boolean;
  formatNumber?: boolean;
  required?: boolean;
  maxLength?: number;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  validateUrl?: boolean;
}

const Input: React.FC<InputProps> = ({
  id,
  label,
  type = "text",
  disabled,
  formatDollar,
  formatPercentage,
  formatNumber,
  register,
  maxLength,
  required,
  errors,
  validateUrl,
}) => {
  const urlPattern =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  return (
    <div className="w-full relative">
      {(formatDollar || formatPercentage || formatNumber) && (
        <div className="absolute top-5 left-2">
          {formatDollar && <BiDollar size={24} className="text-neutral-700" />}
          {formatPercentage && (
            <FiPercent size={24} className="text-neutral-700" />
          )}
          {formatNumber && (
            <MdOutlineNumbers size={24} className="text-neutral-700" />
          )}
        </div>
      )}
      <input
        id={id}
        disabled={disabled}
        {...register(id, {
          required: required ? "This field is required" : false,
          maxLength: maxLength && {
            value: maxLength,
            message: `This field must be at most ${maxLength} characters long`,
          },
          pattern: validateUrl
            ? {
                value: urlPattern,
                message: "Please enter a valid URL",
              }
            : undefined,
        })}
        placeholder=" " // space on purpose for formatting
        type={type === "percentage" ? "number" : type}
        className={`
          peer
          w-full
          p-4
          pt-6 
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          ${formatDollar || formatPercentage || formatNumber ? "pl-9" : "pl-4"}
          ${errors[id] ? "border-sky-500" : "border-neutral-300"}
          ${errors[id] ? "focus:border-sky-500" : "focus:border-black"}
        `}
      />

      <label
        className={`
          absolute 
          text-md
          duration-150 
          transform 
          -translate-y-3 
          top-5 
          z-10 
          origin-[0] 
          ${
            formatDollar || formatPercentage || formatNumber
              ? "left-9"
              : "left-4"
          }
          peer-placeholder-shown:scale-100 
          peer-placeholder-shown:translate-y-0 
          peer-focus:scale-75
          peer-focus:-translate-y-4
          ${errors[id] ? "text-sky-500" : "text-zinc-400"}
        `}
      >
        {label}
      </label>
      {errors[id] && (
        <p className="text-red-500 text-xs mt-1">
          {errors[id]?.message as string}
        </p>
      )}
    </div>
  );
};

export default Input;
