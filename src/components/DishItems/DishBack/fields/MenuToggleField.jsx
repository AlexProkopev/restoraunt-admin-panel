import { Button, Tooltip } from '@mui/material';
import useDishesLogic from '../../../../hooks/useDishesLogic';

export default function MenuToggleField({ _id, isAvailable }) {
  const { handleShowInMenu } = useDishesLogic();

  return (
    <Tooltip title="Изменить по нажатию">
      <Button onClick={() => handleShowInMenu(_id, isAvailable)}>
        Показано в меню: {isAvailable ? 'Да' : 'Нет'}
      </Button>
    </Tooltip>
  );
}