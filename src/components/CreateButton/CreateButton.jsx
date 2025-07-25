import  { useState } from 'react';
import UniversalModal from '../UniversalModal/UniversalModal';
import * as yup from 'yup';
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
    const newForm = { ...form, [field]: value };
    setForm(newForm);

    validationSchema
      .validateAt(field, newForm)
      .then(() => {
        setErrors((prev) => ({ ...prev, [field]: '' }));
      })
      .catch((err) => {
        setErrors((prev) => ({ ...prev, [field]: err.message }));
      });
  };

  const handleSubmit = async () => {
    try {
      await validationSchema.validate(form, { abortEarly: false });
      await onCreate(form);
      setOpen(false);
      setForm(initialForm);
      setErrors({});
      if (afterCreate) afterCreate();
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const formErrors = err.inner.reduce((acc, curr) => {
          acc[curr.path] = curr.message;
          return acc;
        }, {});
        setErrors(formErrors);
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

export default CreateButton


