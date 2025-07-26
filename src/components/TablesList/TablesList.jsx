import { Card, CardContent, ListItem, Typography } from '@mui/material';
import TablesOccupied from './TablesOccupied/TablesOccupied';
import DeleteButton from '../DeleteButton/DeleteButton';
import useEditableData from '../../hooks/useEditableData';
import PicnicTableIcon from '../PicnicTableIcon/PicnicTableIcon';

function TablesList({ dataList }) {
  const { isOccupied, location, number, seats, _id } = dataList;
  const { handleDeleteTable } = useEditableData();

  return (
    <ListItem sx={{ maxWidth: '300px', mb: 1.5, }}>
      <Card sx={{ maxWidth: '250px', minHeight: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', }}>
        <CardContent sx={{ color: 'text.secondary', display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
          {isOccupied ? <TablesOccupied styleClassName={'loader__circle_isOccupied'} status={'Стол занят'} /> : <TablesOccupied styleClassName={'loader__circle'} status={'Стол свободен'} />}
          <Typography variant="h5" sx={{ textAlign: 'center' }}>{location}</Typography>
          <PicnicTableIcon number={number} isOccupied={isOccupied} />
          <Typography variant="body2">Количество мест: {seats}</Typography>
          <DeleteButton onDelete={handleDeleteTable} deletedObjectId={_id} />
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default TablesList;
