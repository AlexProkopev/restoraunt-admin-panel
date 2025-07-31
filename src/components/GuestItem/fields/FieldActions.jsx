import { Box, Tooltip } from '@mui/material';
import { cardWrapperStyles } from '../GuestItem.style';
import DeleteButton from '../../DeleteButton/DeleteButton';
import useGuestsLogic from '../../../hooks/useGuestsLogic';
import { useTheme } from '@mui/material';
import { actionWrapper } from './Field.styles';

function FieldActions({ guestId, onEdit }) {
  const theme = useTheme();
  const { handleDeleteGuest } = useGuestsLogic();

  return (
    <Box sx={cardWrapperStyles}>
      <Tooltip title="Редактировать гостя">
        <Box component="span" sx={actionWrapper(theme)} onClick={onEdit}> Редактировать </Box>
      </Tooltip>
      <DeleteButton onDelete={handleDeleteGuest} deletedObjectId={guestId} />
    </Box>
  );
}

export default FieldActions;
