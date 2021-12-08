import React from "react";
import {AppBar as MuiAppBar} from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchInput from './Search';
import DrawerMobile from './DrawerMobile';

function AppBar() {
    const [open, setOpen] = React.useState<boolean>(false);
    const drawerChange = () =>{
        setOpen(!open)
    }
  return (
    <Box sx={{ flexGrow: 1 }} >
      <MuiAppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { xs: 'inherit', md: 'none' } }}
            onClick={drawerChange}
          >
            <MenuIcon />
          </IconButton>
          <DrawerMobile open={open} drawerChange={drawerChange}/>

          <Typography variant="h6" component="div" sx={{ display: { xs: 'none', md: 'inherit' } }}>
            Update
          </Typography>
          {/* <SearchInput/> */}
          {/* <Button variant="outlined" size="large" sx={{ mr: 1 }}>
          Angular
        </Button>
        <Button variant="outlined" size="large">
          React
        </Button> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <Button color="inherit">Login</Button> */}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
}

export default AppBar;
