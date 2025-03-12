import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
  TextField,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle, Search, ExpandMore } from "@mui/icons-material";
import CartWidget from "../cartWidget/cartWidget";

function Navbar({ carritoLength, onCartClick }) { 
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleCategoryClick = (categoria) => {
    navigate(`/tienda/${categoria}`);
    setAnchorEl(null);
  };

  return (
    <AppBar 
      position="fixed"
    sx={{
      top: "10px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "90%",
      maxWidth: "1200px",
      borderRadius: "10px",
      backgroundColor: "#2e7d32",
      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    }}
  >
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
          <Button component={Link} to="/" color="inherit">
            Inicio
          </Button>

          <Button color="inherit" onClick={handleMenuOpen} endIcon={<ExpandMore />}>
            Categorías
          </Button>
          <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
            <MenuItem onClick={() => handleCategoryClick("interior")}>
              Plantas de Interior
            </MenuItem>
            <MenuItem onClick={() => handleCategoryClick("exterior")}>
              Plantas de Exterior
            </MenuItem>
            <MenuItem onClick={() => handleCategoryClick("artificial")}>
              Plantas Artificiales
            </MenuItem>
          </Menu>

          <Button component={Link} to="/contacto" color="inherit">
            Contacto
          </Button>
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
              "& .MuiOutlinedInput-root": { "& fieldset": { border: "none" } },
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




