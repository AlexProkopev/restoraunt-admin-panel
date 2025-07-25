import { Tooltip, Typography, Stack } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const DateCell = ({ date, onClick }) => (
  <Tooltip title="Изменить дату брони">
    <Stack direction="row" alignItems="center" spacing={0.5} sx={{ cursor: "pointer" }} onClick={onClick}>
      <CalendarMonthIcon fontSize="small" color="primary" />
      <Typography variant="body2" color="primary">
        {date}
      </Typography>
    </Stack>
  </Tooltip>
);

export default DateCell;
