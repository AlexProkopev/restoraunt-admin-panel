import { Box, } from "@mui/material";
import {  Outlet  } from "react-router-dom";
 
import MenuNavigation from "../../components/MenuNavigation/MenuNavigation";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchIngredients } from "../../redux/ingredinets/services";

function Menu() {

  const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchIngredients())
        // dispatch(fetchIngredientById())
        // dispatch(addIngredientThunk())
        // dispatch(updateIngredientThunk())
        // dispatch(deleteIngredientThunk())
    },[dispatch])
 
  return (
    <Box sx={{ width: "100%", px: 2, py: 1 }}>
      <MenuNavigation/>

      <Box sx={{ mt: 2 }}> <Outlet /> </Box>
    </Box>
  );
}

export default Menu;
