import React from "react";
import { IconButton, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function CartWidget({ carritoLength, onCartClick }) {
  return (
    <IconButton color="inherit" onClick={onCartClick}>
      <Badge badgeContent={carritoLength} color="error">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}

export default CartWidget;
