import { FormControl, Input, InputLabel} from '@mui/material'
import { inputStyles } from './Field.styles'

export  function NameFilterInput({ value, onChange }) {
  return (
    <FormControl sx={inputStyles}>
      <InputLabel>Поиск по имени</InputLabel>
      <Input value={value} onChange={onChange} label="Поиск по имени" />
    </FormControl>
  )
}

export  function PhoneFilterInput({ value, onChange }) {
  return (
    <FormControl sx={inputStyles}>
      <InputLabel>Поиск по телефону</InputLabel>
      <Input value={value} onChange={onChange} label="Поиск по телефону" />
    </FormControl>
  )
}


