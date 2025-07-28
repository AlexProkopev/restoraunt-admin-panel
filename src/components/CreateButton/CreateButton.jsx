import { useCreateModalForm } from '../../hooks/useCreateModal';
import UniversalModal from '../UniversalModal/UniversalModal';
import css from './CreateButton.module.css';


const CreateButton = ({ onCreate, initialForm, validationSchema, FormComponent, title = 'Создать', submitLabel = 'Создать' }) => {

  const {open,form,errors,handleOpen,handleClose,handleChange,handleSubmit} = useCreateModalForm({initialForm,validationSchema,onCreate });

  return (
    <>
      <button className={css.Btn} onClick={handleOpen}>
        <div className={css.sign}>+</div>
        <div className={css.text}>{title}</div>
      </button>

      <UniversalModal  open={open} onClose={handleClose} title={title} onSubmit={handleSubmit} submitLabel={submitLabel} >
        <FormComponent form={form} handleChange={handleChange} errors={errors} />
      </UniversalModal>
    </>
  );
};

export default CreateButton;
