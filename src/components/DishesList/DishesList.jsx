import { List } from "@mui/material"
import { useSelector } from "react-redux"
import { selectDishes } from "../../redux/dishes/dishes.selectors"
import DishItems from "../DishItems/DishItems";

function DishesList() {
    const dishesData = useSelector(selectDishes)
    console.log(dishesData);

  return (
    <List sx={{display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center'}}>
       {dishesData?.map((dish) => (
        <DishItems key={dish._id} dishItem={dish} />
      ))}
    </List>
  )
}

export default DishesList