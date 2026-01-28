import type React from "react";

type TextAreaProps = {
  label?: string;
  error?: string;
  className?: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function TextArea({ label, error, className, ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-sm font-medium text-black">{label}</label>}

      <textarea
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
