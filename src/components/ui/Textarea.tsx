import React from "react";
import { FormField } from "./FormField";

type TextAreaProps = {
  label?: string;
  error?: string;
  className?: string;
  id?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({
  label,
  error,
  className,
  id,
  ...props
}: TextAreaProps) {
  return (
    <FormField label={label} error={error} id={id}>
      <textarea
        id={id}
        {...props}
        className="border px-3 py-2 rounded outline-none  
            focus:ring-blue-500 
            focus:border-blue-600
            dark:bg-gray-600 
            dark:border-gray-600"
      />
    </FormField>
  );
}
