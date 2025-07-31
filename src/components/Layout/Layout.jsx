
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Sidebar from "../Sidebar/Sidebar";

const Layout = () => {
  return (
      <Box sx={{ display: 'flex' , overflow: "auto" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3, overflow: "auto" }}>
        <Outlet />
      </Box>
    </Box>
     
  );
};

export default Layout