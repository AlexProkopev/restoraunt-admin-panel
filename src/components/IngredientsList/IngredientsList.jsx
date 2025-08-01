import { List} from '@mui/material'
import IngredientCard from '../IngredientCard/IngredientCard'

function IngredientsList({dataIngredients}) {

  return (
    <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
      {dataIngredients?.map(ingredient => (
        <IngredientCard key={ingredient._id} ingredient={ingredient} />
        
      ))}
    </List>
  )
}

export default IngredientsList