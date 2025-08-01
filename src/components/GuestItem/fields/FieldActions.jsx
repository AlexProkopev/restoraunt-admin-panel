import { Box, Tooltip } from '@mui/material';
import { cardWrapperStyles } from '../GuestItem.style';
import DeleteButton from '../../DeleteButton/DeleteButton';
import { useTheme } from '@mui/material';
import { actionWrapper } from './Field.styles';
import { deleteGuestThunk, fetchGuests } from '../../../redux/guests/services';
import useHandller from '../../../hooks/useHandller';

function FieldActions({ guestId, onEdit }) {
  const theme = useTheme();
  const { handleDelete} = useHandller();

  return (
    <Box sx={cardWrapperStyles}>
      <Tooltip title="Редактировать гостя">
        <Box component="span" sx={actionWrapper(theme)} onClick={onEdit}> Редактировать </Box>
      </Tooltip>
      <DeleteButton  onDelete={handleDelete}deleteFetch={deleteGuestThunk} fetchData={fetchGuests} objectId={guestId} />
    </Box>
  );
}

export default FieldActions;
