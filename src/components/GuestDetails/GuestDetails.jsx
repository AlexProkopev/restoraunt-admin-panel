import { useState } from 'react';
import { Box, Typography, FormControl, InputLabel, Input, Tooltip } from '@mui/material';
import dayjs from 'dayjs';

function GuestDetails({ guest }) {
  const { name, phone, countVisit, lastVisit } = guest;

  const [stateUpdate, setStateUpdate] = useState({
    name,
    phone,
    countVisit,
    lastVisit,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateUpdate((prev) => ({ ...prev, [name]: value }));
  };

  const getStatusGuest = () => {
    if (stateUpdate.countVisit > 10) return 'VIP';
    if (stateUpdate.countVisit > 5) return 'Частый гость';
    return 'Новый';
  };

  const giveColorStatus = (status) => {
    switch (status) {
      case 'VIP':
        return '#FFD700';
      case 'Частый гость':
        return '#C0C0C0';
      default:
        return '#9e9e9e';
    }
  };

  const makeDiscount = () => {
  if (stateUpdate.countVisit > 100) return '7%'
  if (stateUpdate.countVisit > 50) return '5%'
  return '0%'
}

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
        maxWidth: 400,
        mx: 'auto',
        p: 3,
        borderRadius: 2,
        bgcolor: giveColorStatus(getStatusGuest()) + '20',
        border: `1px solid ${giveColorStatus(getStatusGuest())}`,
        color: giveColorStatus(getStatusGuest()),
        boxShadow: 3,
      }}
    >
      <Typography variant="h6" textAlign="center">
        {name}
      </Typography>
      <Typography
        variant="h6"
        textAlign="center"
        color={giveColorStatus(getStatusGuest())}
        fontWeight={600}
      >
        Статус: {getStatusGuest()}
      </Typography>

      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="name">Имя</InputLabel>
        <Input id="name" name="name" value={stateUpdate.name}  onChange={handleChange} />
      </FormControl>

      <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="phone">Телефон</InputLabel>
        <Input id="phone" name="phone" type="tel" value={stateUpdate.phone} onChange={handleChange} />
      </FormControl>

      <Tooltip title="Количество посещений учитываеться только если гость был пришел и был за столом.">
         <FormControl variant="standard" fullWidth>
        <InputLabel htmlFor="countVisit">Количество посещений</InputLabel>
        <Input
          id="countVisit"
          name="countVisit"
          type="number"
          value={stateUpdate.countVisit}
          onChange={handleChange} 
        />
      </FormControl>
      </Tooltip>

      <FormControl variant="standard" fullWidth>
        <InputLabel shrink htmlFor="lastVisit">
          Последний визит
        </InputLabel>
        <Input
          id="lastVisit"
          name="lastVisit"
          type="text"
          value={dayjs(stateUpdate.lastVisit).format('YYYY-MM-DD HH:mm')}
          disabled
        />
      </FormControl>

      <Tooltip title="Скидка предоставляется в зависимости от количества посещений и может быть изменена только владельцем .">
        <FormControl variant="standard" fullWidth>
        <InputLabel shrink htmlFor="discount">
          Скидка
        </InputLabel>
        <Input
          id="discount"
          name="discount"
          type="text"
          value={makeDiscount()}
          disabled
        />
      </FormControl>
      </Tooltip>
      <FormControl variant="standard" fullWidth>
        <InputLabel shrink htmlFor="averageCheck">
          Средний чек
        </InputLabel>
        <Input
          id="averageCheck"
          name="averageCheck"
          type="text"
          value={'В скором времени будет доступно'}
          disabled
        />
      </FormControl>
    </Box>
  );
}

export default GuestDetails;
