import { useState } from 'react';
import UniversalModal from '../UniversalModal/UniversalModal';
import css from './CreateButton.module.css';

const CreateButton = ({
  onCreate,
  initialForm,
  validationSchema,
  afterCreate,
  FormComponent,
  title = 'Создать',
  submitLabel = 'Создать',
}) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
 

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
    try {
      if (validationSchema) {
        await validationSchema.validate(form, { abortEarly: false });
      }
      await onCreate(form);
      setOpen(false);
      setForm(initialForm);
      setErrors({});
      if (afterCreate) afterCreate();
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

  return (
    <>
      <button className={css.Btn} onClick={() => setOpen(true)}>
        <div className={css.sign}>+</div>
        <div className={css.text}>{title}</div>
      </button>

      <UniversalModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        onSubmit={handleSubmit}
        submitLabel={submitLabel}
      >
        <FormComponent
          form={form}
          handleChange={handleChange}
          errors={errors}
        />
      </UniversalModal>
    </>
  );
};

export default CreateButton;
