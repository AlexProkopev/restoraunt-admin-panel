import { FormControlLabel } from '@mui/material';
import css from './SwitchStatus.module.css'

const SwitchStatus = ({ row, handleStatusChange, getValue }) => {
  const status = getValue();
  const isOnPlace = status === 'На месте';

  const id = `switch-${row.original._id}`;

  const onChangeHandler = () => {
    const newStatus = isOnPlace ? 'Ожидаем' : 'На месте';
    handleStatusChange(row.original._id, newStatus);
  };

  return (
    <FormControlLabel
      control={
        <div className={css.switch}>
          <input type="checkbox"  id={id} className={css.switchCheck} checked={isOnPlace} onChange={onChangeHandler} disabled={isOnPlace} />
          <label  className={`${css.switchLabel} ${isOnPlace ? css.disabled : ''}`} htmlFor={id}>
            Check
            <span></span>
          </label>
        </div>
      }
      label={status}
      labelPlacement="bottom"
    />
  );
};

export default SwitchStatus;
