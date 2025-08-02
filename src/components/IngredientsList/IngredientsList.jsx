import { List} from '@mui/material'
import IngredientCard from '../IngredientCard/IngredientCard'
import useEditableData from '../../hooks/useEditableData';
import UniversalModal from '../UniversalModal/UniversalModal';
import EditIngredientsForm from '../EditIngredientsForm/EditIngredientsForm';

function IngredientsList({dataIngredients}) {
  const { openModal, selectedItem, setOpenModal, handleEdit, handleChange, handleSubmitIngredient} = useEditableData();

  return (
  <>
    <List sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
      {dataIngredients?.map(ingredient => (
        <IngredientCard  onClick={() => handleEdit(ingredient)}  key={ingredient._id} ingredient={ingredient} />
        
      ))}

     
      
    </List>
     <UniversalModal open={openModal} onClose={() => setOpenModal(false)}       title="Редактирование продукта" onSubmit={handleSubmitIngredient}>
              <EditIngredientsForm selectedItem={selectedItem} handleChange={handleChange} />
            </UniversalModal>
            </>
  )
}

export default IngredientsList