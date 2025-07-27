import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
} from '@mui/material';
import TablesOccupied from './TablesOccupied/TablesOccupied';
import DeleteButton from '../DeleteButton/DeleteButton';
import useEditableData from '../../hooks/useEditableData';
import PicnicTableIcon from '../PicnicTableIcon/PicnicTableIcon';
import { useState } from 'react';
import UniversalModal from '../UniversalModal/UniversalModal';

function TablesList({ dataList }) {
  const [open, setOpen] = useState(false);
  const { isOccupied, location, number, seats, _id, bookingDate } = dataList;
  const { handleDeleteTable } = useEditableData();

  return (
    <>
      <ListItem sx={{ maxWidth: '300px', mb: 1.5 }}>
        <Card
          onClick={() => setOpen(true)}
          sx={{
            maxWidth: '250px',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardContent
            sx={{
              color: 'text.secondary',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
              alignItems: 'center',
            }}
          >
            {isOccupied ? (
              <TablesOccupied
                styleClassName={'loader__circle_isOccupied'}
                status={'Стол занят'}
              />
            ) : (
              <TablesOccupied
                styleClassName={'loader__circle'}
                status={'Стол свободен'}
              />
            )}
            <Typography variant="h5" sx={{ textAlign: 'center' }}>
              {location}
            </Typography>
            <PicnicTableIcon number={number} isOccupied={isOccupied} />
            <Typography variant="body2">Количество мест: {seats}</Typography>
            <DeleteButton onDelete={handleDeleteTable} deletedObjectId={_id} />
          </CardContent>
        </Card>
      </ListItem>
      <UniversalModal
        open={open}
        onClose={() => setOpen(false)}
        title={`Стол №${number}`}
        onSubmit={() => setOpen(false)}
        submitLabel="Закрыть"
      >
        {bookingDate.length > 0 ? (
          <List sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {bookingDate?.map((el) => {
              return (
                <ListItem key={el._id + 348}>
                  <Typography>Номер: {el.phone}</Typography>
                  <Typography>Имя: {el.name}</Typography>
                  <Typography>Время брони: {el.date}</Typography>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <>
            <Typography>Нет брони</Typography>
          </>
        )}
      </UniversalModal>
    </>
  );
}

export default TablesList;
