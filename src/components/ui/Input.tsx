import React from "react";
import { useId } from "react";


export type InputProps = {
  label?: string;
  error?: string;
  className?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, error, className, id, ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-black">{label}</label>
      )}
      <input
      id={inputId}
        {...props}
        className={`border px-3 py-2 rounded outline-none 
             
            focus:ring-blue-500 
            focus:border-blue-600
            dark:bg-gray-600 
            dark:border-gray-600
            ${className ?? ""}`}
      />
      {error && <p className="text-red-500 text-sm break-words max-w-full">{error}</p>}
    </div>
  );
}
