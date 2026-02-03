import React from "react";
import { FormField } from "./FormField";

export type InputProps = {
  label?: string;
  error?: string;
  className?: string;
  id?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <FormField label={label} error={error} id={id}>
      <input
        id={id}
        {...props}
        className={`border px-3 py-2 rounded outline-none 
             
            focus:ring-blue-500 
            focus:border-blue-600
            dark:bg-gray-600 
            dark:border-gray-600
            ${className ?? ""}`}
      />
    </FormField>
  );
}
