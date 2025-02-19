import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Box, Button, TextField, Menu, MenuItem } from "@mui/material";
import { AccountCircle, Search, ExpandMore } from "@mui/icons-material";
import CartWidget from "../cartWidget/cartWidget";

function Navbar({ carritoLength, onCartClick }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "rgb(49, 114, 52)", margin: 0 }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
          <img 
            src="https://www.iconpacks.net/icons/2/free-leaves-icon-1571-thumb.png" 
            alt="Logo" 
            style={{ width: "40px", marginRight: "10px" }} 
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            PLANET
          </Typography>
        </Box>

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit">Inicio</Button>
          
          <Button color="inherit" onClick={handleMenuOpen} endIcon={<ExpandMore />}>
            Categorías
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Plantas de Interior</MenuItem>
            <MenuItem onClick={handleMenuClose}>Plantas de Exterior</MenuItem>
            <MenuItem onClick={handleMenuClose}>Plantas Artificiales</MenuItem>
          </Menu>

          <Button color="inherit">Contacto</Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", mx: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Buscar..."
            sx={{
              backgroundColor: "white",
              borderRadius: "5px",
              width: "200px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },
              },
            }}
          />
          <IconButton color="inherit">
            <Search />
          </IconButton>
        </Box>

        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>

        <CartWidget carritoLength={carritoLength} onCartClick={onCartClick} />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


