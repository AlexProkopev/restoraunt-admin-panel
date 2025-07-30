import { FormControl, Input, InputLabel} from '@mui/material'

export  function NameFilterInput({ value, onChange }) {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel>Поиск по имени</InputLabel>
      <Input value={value} onChange={onChange} label="Поиск по имени" />
    </FormControl>
  )
}

export  function PhoneFilterInput({ value, onChange }) {
  return (
    <FormControl sx={{ minWidth: 120 }}>
      <InputLabel>Поиск по телефону</InputLabel>
      <Input value={value} onChange={onChange} label="Поиск по телефону" />
    </FormControl>
  )
}


