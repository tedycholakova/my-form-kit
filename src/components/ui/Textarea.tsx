import React from "react";
import { useId } from "react";

type TextAreaProps = {
  label?: string;
  error?: string;
  className?: string;
  id?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ label, error, className, id, ...props }: TextAreaProps) {
     const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label htmlFor={inputId} className="text-sm font-medium text-black">{label}</label>}

      <textarea
        id={inputId}
        {...props}
        className="border px-3 py-2 rounded outline-none  
            focus:ring-blue-500 
            focus:border-blue-600
            dark:bg-gray-600 
            dark:border-gray-600"
      />

      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
