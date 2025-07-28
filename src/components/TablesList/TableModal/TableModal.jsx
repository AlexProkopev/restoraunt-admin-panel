import { List, ListItem, Typography } from '@mui/material';
import UniversalModal from '../../UniversalModal/UniversalModal';

function TableModal({ open, onClose, table }) {
  const { number, bookingDate } = table;

  return (
    <UniversalModal
      open={open}
      onClose={onClose}
      title={`Стол №${number}`}
      onSubmit={onClose}
      submitLabel="Закрыть"
    >
      {bookingDate.length > 0 ? (
        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {bookingDate.map((el) => (
            <ListItem key={el._id}>
              <Typography>Номер: {el.phone}</Typography>
              <Typography>Имя: {el.name}</Typography>
              <Typography>Время брони: {el.date}</Typography>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>Нет брони</Typography>
      )}
    </UniversalModal>
  );
}

export default TableModal;
