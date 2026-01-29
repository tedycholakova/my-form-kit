import React from "react";
import { useId } from "react";

type Option = {
  value: string;
  label: string;
};

export type SelectProps = {
  label?: string;
  error?: string;
  id?: string;
  options: Option[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ label, error, options, id, ...props }: SelectProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium">
          {" "}
          {label}
        </label>
      )}
      <select
        id={inputId}
        className={`
        border px-3 py-2 rounded focus:ring-2 
        focus:ring-blue-500 
        ${error ? "border-red-500 focus:ring-red-500" : ""}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
