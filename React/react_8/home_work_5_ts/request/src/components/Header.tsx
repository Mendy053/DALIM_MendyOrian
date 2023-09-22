import { NavLink } from "react-router-dom";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

export default function Header() {
   const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

   return (
      <AppBar position="static">
         <Container maxWidth="xl">
            <Toolbar disableGutters>
               <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                  <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={(event) => setAnchorElNav(event.currentTarget)}
                     color="inherit"
                  >
                     <MenuIcon />
                  </IconButton>
                  <Menu
                     id="menu-appbar"
                     anchorEl={anchorElNav}
                     anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "left",
                     }}
                     keepMounted
                     transformOrigin={{
                        vertical: "top",
                        horizontal: "left",
                     }}
                     open={Boolean(anchorElNav)}
                     onClose={() => setAnchorElNav(null)}
                     sx={{
                        display: { xs: "block", md: "none" },
                     }}
                  >
                     <MenuItem>
                        <NavLink className="dark_link" to="/">
                           Home
                        </NavLink>
                     </MenuItem>
                     <MenuItem>
                        <NavLink className="dark_link" to="/favorite">
                           Favorite
                        </NavLink>
                     </MenuItem>
                  </Menu>
               </Box>

               <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                     <NavLink to="/">Home</NavLink>
                  </Button>
                  <Button sx={{ my: 2, color: "white", display: "block" }}>
                     <NavLink to="/favorite">Favorite</NavLink>
                  </Button>
               </Box>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
