
import { Tooltip } from '@mui/material'
import './TablesOccupied.css'

function TablesOccupied({styleClassName,status}) {
  return (
    <Tooltip title={status} arrow>
  <div className="loader" aria-label={status}>
    <div className={styleClassName}></div>
    <div className={styleClassName}></div>
    <div className={styleClassName}></div>
    <div className={styleClassName}></div>
  </div>
</Tooltip>

  )
}

export default TablesOccupied