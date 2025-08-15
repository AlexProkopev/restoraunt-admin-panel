import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { NavLink,  useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { navItemMenu } from "../../Page/Menu/Menu.styles";
import { useMemo } from "react";

function MenuNavigation() {
  
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

 const currentTab = useMemo(() => {
  if (location.pathname.includes("ingredients")) return "/menu/ingredients";
  if (location.pathname.includes("dishes")) return "/menu/dishes";
  if (location.pathname.includes("create")) return "/menu/create";
  if (location.pathname.includes("current")) return "/menu/current";
  return "/menu/current";
}, [location.pathname]);
  return (
    <>
     <Tabs value={currentTab} variant={isMobile ? "scrollable" : "standard"} scrollButtons="auto" centered={!isMobile} textColor="primary" indicatorColor="primary" sx={navItemMenu} >
        <Tab label="Продукты" value="/menu/ingredients" component={NavLink} to="/menu/ingredients" />
        <Tab label="Блюда" value="/menu/dishes" component={NavLink} to="/menu/dishes" />
        <Tab label="Создать блюдо" value="/menu/create" component={NavLink} to="/menu/create" />
        <Tab label="Меню" value="/menu/current" component={NavLink} to="/menu/current" />
      </Tabs>
    </>
  )
}

export default MenuNavigation