import React, { useState } from "react";
import { Badge, IconButton, Popover, Box, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "../Context/CartContext";

const CartWidget = () => {
  const { carrito, totalPagar, actualizarCantidad, eliminarDelCarrito } = useCart();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "cart-popover" : undefined;

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={carrito.length} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box sx={{ p: 2, width: 320 }}>
          <Typography variant="h6">Carrito de Compras</Typography>

          {carrito.length > 0 ? (
            <>
              {carrito.map((item) => (
                <Box 
                  key={item.id} 
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between", 
                    mt: 1, 
                    borderBottom: "1px solid #ddd", 
                    pb: 1 
                  }}
                >
                  <img 
                    src={item.imagen} 
                    alt={item.title} 
                    width="50" 
                    height="50" 
                    style={{ borderRadius: "8px", objectFit: "cover" }} 
                  />
                  
                  <Box sx={{ flexGrow: 1, ml: 1 }}>
                    <Typography variant="body1" sx={{ fontSize: "14px", fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ fontSize: "12px", color: "gray" }}>
                      ${item.price} x {item.cantidad}
                    </Typography>
                  </Box>

                  <Box>
                    <Button size="small" onClick={() => actualizarCantidad(item.id, item.cantidad - 1)} disabled={item.cantidad <= 1}>-</Button>
                    <Button size="small" onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</Button>
                    <Button size="small" onClick={() => eliminarDelCarrito(item.id)}>❌</Button>
                  </Box>
                </Box>
              ))}

              <Typography variant="h6" sx={{ mt: 2 }}>Total: ${totalPagar}</Typography>
            </>
          ) : (
            <Typography variant="body2" sx={{ mt: 2 }}>El carrito está vacío</Typography>
          )}
        </Box>
      </Popover>
    </>
  );
};

export default CartWidget;
