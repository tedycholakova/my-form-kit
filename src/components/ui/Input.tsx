export type InputProps = {
  label?: string;
  error?: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-black">{label}</label>
      )}
      <input
        {...props}
        className={`border px-3 py-2 rounded outline-none 
             
            focus:blue-500 
            focus:border-blue-600
            dark:bg-gray-600 
            dark:border-gray-600
            ${className ?? ""}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
