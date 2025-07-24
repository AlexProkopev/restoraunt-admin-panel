import { useState } from "react";
import { TextField, Box} from "@mui/material";
import UniversalModal from "../UniversalModal/UniversalModal";
import css from "./CreateButton.module.css";

const CreateButton = ({ onCreate, initialForm}) => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(initialForm);

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    onCreate(form);
    setOpen(false);
    setForm(initialForm);
    
  };

  return (
    <>
      <button
        className={css.Btn}
        onClick={() => setOpen(true)}
      >
        <div className={css.sign}>+</div>
        <div className={css.text}>Добавить</div>
      </button>

      <UniversalModal
        open={open}
        onClose={() => setOpen(false)}
        title="Новая бронь"
        onSubmit={handleSubmit}
        submitLabel="Создать"
      >
        <Box display="flex" flexDirection="column" gap={2} mt={1}>
          <TextField
            label="Имя"
            value={form.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <TextField
            label="Телефон"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
          />
          <TextField
            label="Дата и время"
            type="datetime-local"
            value={form.date}
            onChange={(e) => handleChange("date", e.target.value)}
          />
          <TextField
            label="Гостей"
            type="number"
            value={form.guests}
            onChange={(e) => handleChange("guests", e.target.value)}
          />
          {/* <TextField
            label="Стол"
            value={form.table}
            onChange={(e) => handleChange('table', e.target.value)}
          /> */}
          <TextField
            label="Заметки"
            value={form.notes}
            onChange={(e) => handleChange("notes", e.target.value)}
          />
        </Box>
      </UniversalModal>
    </>
  );
};

export default CreateButton;
