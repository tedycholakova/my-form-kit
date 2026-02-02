**Project**
- **Name:** My Form Kit
- **Type:** React + TypeScript + Vite + Tailwind CSS

**Description**
A small React + TypeScript project for building a reusable UI component library with custom form elements, React Hook Form integration, and Tailwind CSS styling.

This project is part of a learning path focused on:

- Strengthening React and TypeScript skills
- Practicing reusable UI design patterns
- Working with Tailwind CSS
- Form handling and validation with React Hook Form
- Preparing for future migration to Next.js

---
## 📦 Prerequisites

- [Node.js]
- [npm]

---

## Getting Started

1. **Clone the repository:**
  ```
  git clone <repo-url>
  cd my-form-kit
  ```
2. **Install dependencies:**
  ```
  npm install
  ```
3. **Start the development server:**
  ```
  npm run dev
  ```
4. **Open in browser:**
  Visit [http://localhost:5173]

---
---
## 🚀 Features

- ⚛️ **React + TypeScript** – strongly typed components and predictable structure
- 🎨 **Custom UI Components** – Input, Button, Select, Textarea, Checkbox, and more
- 🧩 **Tailwind CSS** – utility‑first styling for speed and consistency
- 📝 **React Hook Form** – performant form state management
- 📁 **Scalable File Structure** – suitable for growing into a full Next.js project

---


## RegistrationForm Component

An example registration component built with React Hook Form and custom UI elements.

- **Fields included:**

First Name (required)
Family Name (optional)
Email (required, email format)
Password (required, min length)
Confirm Password (required, must match password)
Terms and Conditions (required)

- **Validations:**
  All validation is handled through React Hook Form using built‑in rules:

required
minLength
pattern
validate (for password confirmation)

-**UI:**
Uses the custom components:

- Input
- Button
- Checkbox

* **Styling:**
  Tailwind CSS utility classes are used for spacing, layout, and error messages.

## 📌 Usage Example

```tsx
import { RegistrationForm } from "./components/RegistrationForm";

export default function App() {
  return (
    <div className="p-8">
      <RegistrationForm />
    </div>
  );
}
```
