type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant,
  className,
  ...props
}: ButtonProps) {
  const base = "px-4 py-2 rounded font-medium";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary:
      "bg-gray-200 text-black hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600",
  };

  return (
    <button
      className={`${base} ${variants[variant ?? "primary"]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
