import { Box, FormControl, FormLabel, TextField, Typography } from '@mui/material'

function CreateGuestForm({ form, handleChange, errors }) {
  const visitDate = new Date().toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      sx={{ maxWidth: 400, width: '100%', p: 2 }}
    >
      <FormControl fullWidth>
        <FormLabel>Имя</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          value={form.name}
          onChange={(e) => handleChange('name', e.target.value)}
          error={!!errors.name}
          helperText={errors.name || ''}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Телефон</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          value={form.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          error={!!errors.phone}
          helperText={errors.phone || ''}
        />
      </FormControl>

      <FormControl fullWidth>
        <FormLabel>Дата визита</FormLabel>
        <TextField
          size="small"
          variant="outlined"
          value={visitDate}
          disabled
        />
      </FormControl>
    </Box>
  )
}

export default CreateGuestForm
