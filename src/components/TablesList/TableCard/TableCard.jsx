import { Card, CardContent, Typography } from '@mui/material';
import useEditableData from '../../../hooks/useEditableData';
import TablesOccupied from '../TablesOccupied/TablesOccupied';
import PicnicTableIcon from '../../PicnicTableIcon/PicnicTableIcon';
import DeleteButton from '../../DeleteButton/DeleteButton';
import { cardContentStyle, cardStyle, cardTextStyle } from './TableCard.style';

function TableCard({ data, onOpen }) {
  const { isOccupied, location, number, seats, _id } = data;
  const { handleDeleteTable } = useEditableData();

  return (
  
     <Card onClick={onOpen} sx={cardStyle} >
      <CardContent sx={cardContentStyle}>
        <TablesOccupied styleClassName={isOccupied ? 'loader__circle_isOccupied' : 'loader__circle'} status={isOccupied ? 'Стол занят' : 'Стол свободен'} />
        <Typography variant="h5" sx={cardTextStyle}> {location}</Typography>
        <PicnicTableIcon number={number} isOccupied={isOccupied} />
        <Typography variant="body2">Количество мест: {seats}</Typography>
        <DeleteButton onDelete={handleDeleteTable} deletedObjectId={_id} />
      </CardContent>
    </Card>

  );
}

export default TableCard;
