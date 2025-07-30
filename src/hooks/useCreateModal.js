import { useState } from 'react';

export const useCreateModalForm = ({ initialForm, validationSchema, onCreate }) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setForm(initialForm);
    setErrors({});
  };

  const handleChange = (field, value) => {
    const updatedForm = { ...form, [field]: value };
    setForm(updatedForm);

    

    if (validationSchema) {
      validationSchema
        .validateAt(field, updatedForm)
        .then(() => {
          setErrors((prev) => ({ ...prev, [field]: '' }));
        })
        .catch((err) => {
          setErrors((prev) => ({ ...prev, [field]: err.message }));
        });
    }
  };

  const handleSubmit = async () => {
    console.log( form);
    try {
      if (validationSchema) {
        await validationSchema.validate(form, { abortEarly: false });
      }
      await onCreate(form);
      handleClose();
    } catch (err) {
      if (err.name === 'ValidationError') {
        const newErrors = err.inner.reduce((acc, curr) => {
          if (curr.path) acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(newErrors);
      }
    }
  };

  return {
    open,
    form,
    errors,
    handleOpen,
    handleClose,
    handleChange,
    handleSubmit,
  };
};
