import { Box, Typography } from '@mui/material'
import useIngredientsLogic from '../../hooks/useIngredientsLogic'

function IngredientTitle() {
    const {resultPrice} = useIngredientsLogic()
  return (
    <Box>
        <Typography variant="h4" gutterBottom>Ингредиенты</Typography>
        <Typography variant="p" gutterBottom> На общую сумму: {resultPrice} UAH </Typography>
      </Box>
  )
}

export default IngredientTitle