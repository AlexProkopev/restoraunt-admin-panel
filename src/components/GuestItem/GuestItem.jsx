import { Card, CardContent, ListItem, useTheme } from '@mui/material';
import { cardContentStyles, cardItemStyles, listItemStyles } from './GuestItem.style';
import FieldName from './fields/FieldName';
import FieldPhone from './fields/FieldPhone';
import FieldVisit from './fields/FieldVisit';
import FieldLastVisit from './fields/FieldLastVisit';
import FieldActions from './fields/FieldActions';


function GuestItem({ data, onClick }) {
  const theme = useTheme();
  return (
    <ListItem sx={listItemStyles}>
      <Card sx={cardItemStyles(theme)}>
        <CardContent sx={cardContentStyles(theme)}>
          <FieldName name={data.name} />
          <FieldPhone phone={data.phone} />
          <FieldVisit count={data.countVisit} />
          <FieldLastVisit date={data.lastVisit} />
          <FieldActions guestId={data._id} onEdit={onClick} />
        </CardContent>
      </Card>
    </ListItem>
  );
}

export default GuestItem;
