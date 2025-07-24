import { useState } from "react";
import { validationSchema } from "./validationSchema";


export const useForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    try {
      validationSchema.validateSync(formData, { abortEarly: false });
    } catch (err) {
      err.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
    }
    return newErrors;
  };

  return { formData, errors, handleChange, validate, setErrors };
};