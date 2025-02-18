import React from "react";
import { IconButton, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

function CartWidget({ carritoLength, onCartClick }) {
  return (
    <IconButton color="inherit" onClick={onCartClick}>
      <Badge badgeContent={carritoLength} color="secondary">
        <ShoppingCart />
      </Badge>
    </IconButton>
  );
}

export default CartWidget;

