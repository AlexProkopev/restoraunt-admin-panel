import {
  Box,
  Card,
  CardContent,
  ListItem,
  Tooltip,
  Typography,
  useTheme,

} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import PhoneIcon from '@mui/icons-material/Phone'
import EventRepeatIcon from '@mui/icons-material/EventRepeat'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import dayjs from 'dayjs'
import DeleteButton from '../DeleteButton/DeleteButton'
import useGuestsLogic from '../../hooks/useGuestsLogic'

function GuestItem({ data, onClick }) {
  const { countVisit, lastVisit, name, phone, _id } = data
  const { handleDeleteGuest } = useGuestsLogic()
  const theme = useTheme()
  
  return (
    <ListItem sx={{ maxWidth: 340,  py: 2 }}>
      <Card
        sx={{
         
          width: '100%',
          bgcolor: theme.palette.mode === 'dark' ? 'grey.900' : 'grey.100',
          boxShadow: theme.shadows[4],
          borderRadius: 3,
          transition: 'background-color 0.3s',
        }}
      >
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            alignItems: 'center',
            textAlign: 'center',
            color: theme.palette.text.primary,
          }}
        >
          

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PersonIcon color="action" />
            <Typography variant="body1" fontWeight={500}>
              {name}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon color="action" />
            <Typography variant="body1" fontWeight={500}>
              {phone}
            </Typography>
          </Box>

          <Tooltip title="Визиты учитываются, если гость был за столом — статус брони переходил в 'На месте'">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EventRepeatIcon color="action" />
              <Typography variant="body1" fontWeight={500}>
                Визитов: {countVisit}
              </Typography>
            </Box>
          </Tooltip>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon color="action" />
            <Typography variant="body2" color="text.secondary">
              Последний визит: {dayjs(lastVisit).format('DD.MM.YYYY HH:mm')}
            </Typography>
          </Box>

          
       

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Tooltip title="Редактировать гостя">
              <Box component="span" sx={{  cursor: 'pointer', color: theme.palette.primary.main, '&:hover': { textDecoration: 'underline' }, }} onClick={onClick} >
                Редактировать
              </Box>
            </Tooltip>
            
              <DeleteButton onDelete={handleDeleteGuest} deletedObjectId={_id} />
           

          </Box>
        </CardContent>
      </Card>
    </ListItem>
  )
}

export default GuestItem
