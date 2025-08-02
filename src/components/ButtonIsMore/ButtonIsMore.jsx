import { Button } from '@mui/material'

function ButtonIsMore({hasMore, setPage}) {
  return (
    <> {hasMore && <Button onClick={() => setPage(prev => prev + 1)} sx={{margin:'0 auto'}}>Показать ещё</Button>}</>
  )
}

export default ButtonIsMore