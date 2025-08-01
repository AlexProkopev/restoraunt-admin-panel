import { Tabs, Tab, useMediaQuery } from "@mui/material";
import { NavLink,  useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { navItemMenu } from "../../Page/Menu/Menu.styles";

function MenuNavigation() {
      const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const currentTab = location.pathname.includes("ingredients")
    ? "/menu/ingredients"
    : location.pathname.includes("dishes")
    ? "/menu/dishes"
    : "/menu";
  return (
    <>
     <Tabs value={currentTab} variant={isMobile ? "scrollable" : "standard"} scrollButtons="auto" centered={!isMobile} textColor="primary" indicatorColor="primary" sx={navItemMenu} >
        <Tab label="Продукты" value="/menu/ingredients" component={NavLink} to="/menu/ingredients" />
        <Tab label="Блюда" value="/menu/dishes" component={NavLink} to="/menu/dishes" />
        <Tab label="Меню" value="/menu" component={NavLink} to="/menu" />
      </Tabs>
    </>
  )
}

export default MenuNavigation