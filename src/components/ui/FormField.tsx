import React, { useId } from "react";

type FormFieldProps = {
  label?: string;
  error?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export function FormField({
  label,
  error,
  id,
  children,
  className,
}: FormFieldProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={inputId}
          className={`text-sm font-medium text-black ${className || ""}`}
        >
          {label}
        </label>
      )}
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
