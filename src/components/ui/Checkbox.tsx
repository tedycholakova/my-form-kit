import React from "react";
import { useId } from "react";

type CheckBoxProps = {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Checkbox({ label, error, id, ...props }: CheckBoxProps) {
     const generatedId = useId();
  const inputId = id ?? generatedId;
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex items-center gap-2">
        <input type="checkbox" id={inputId} {...props} className="w-4 h-4" />
        {label && <label htmlFor={inputId} className="text-sm font-medium text-black">{label}</label>}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}