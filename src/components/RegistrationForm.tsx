import { useForm } from "react-hook-form";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Checkbox } from "./ui/Checkbox";

type RegistrationFormData = {
    name: string;
    familyName?: string;
    email: string;
    password: string;
    confirmPassword: string;
    terms: boolean;
}

export function RegistrationForm() {
  const formMethods = useForm<RegistrationFormData>({
    mode: "onChange", 
  });

  const register = formMethods.register;
  const handleSubmit = formMethods.handleSubmit;
  const getValues = formMethods.getValues;
  const errors = formMethods.formState.errors;

  const onSubmit = (data: RegistrationFormData) => {
    console.log("Registration data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full max-w-md mx-auto">
      <Input
        label="Name"
        {...register("name", {
          required: "Name is required",
          minLength: { value: 2, message: "Minimum 2 characters" },
        })}
        error={errors.name?.message}
      />
      <Input
        label="Family Name(optional)"
        {...register("familyName")}
        error={errors.familyName?.message}
      />
      <Input
        label="Email"
        type="email"
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" },
        })}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: { value: 6, message: "At least 6 characters long" },
        })}
        error={errors.password?.message}
      />
      <Input
        label="Confirm Password"
        type="password"
        {...register("confirmPassword", {
          required: "Confirm password is required",
          validate: (value) =>
            value === getValues("password") || "Passwords do not match",
        })}
        error={errors.confirmPassword?.message}
      />
      <Checkbox
        label="Accept Terms and Conditions"
        {...register("terms", { required: "You must accept the terms and Conditions" })}
        error={errors.terms?.message}
      />

      <Button type="submit">Register</Button>
    </form>
  );
}