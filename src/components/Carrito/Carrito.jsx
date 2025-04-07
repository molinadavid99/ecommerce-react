import React, { useState } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { useCart } from "../Context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm"; 

function Carrito() {
  const { carrito, eliminarDelCarrito, actualizarCantidad, totalPagar } = useCart();
  const [mostrarCheckout, setMostrarCheckout] = useState(false);

  const handleFinalizarCompra = () => {
    setMostrarCheckout(true);
  };

  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", mt: 5, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>Carrito de Compras</Typography>

      {carrito.length === 0 ? (
        <Typography variant="h6">El carrito está vacío</Typography>
      ) : mostrarCheckout ? (
        <CheckoutForm carrito={carrito} /> 
      ) : (
        <>
          {carrito.map((item) => (
            <Box 
              key={item.id} 
              sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2, border: "1px solid #ddd", p: 2, borderRadius: "8px" }}
            >
              <img src={item.imagen} alt={item.title} width="80" />
              <Typography>{item.title}</Typography>
              <Typography>${item.price}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Button onClick={() => actualizarCantidad(item.id, item.cantidad - 1)} disabled={item.cantidad <= 1}>-</Button>
                <Typography sx={{ mx: 2 }}>{item.cantidad}</Typography>
                <Button onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}>+</Button>
              </Box>
              <IconButton onClick={() => eliminarDelCarrito(item.id)}>❌</IconButton>
            </Box>
          ))}

          <Typography variant="h5" sx={{ mt: 2 }}>Total: ${totalPagar}</Typography>

          <Button 
            variant="contained" 
            color="primary" 
            sx={{ mt: 3 }}
            onClick={handleFinalizarCompra}
          >
            Finalizar Compra
          </Button>
        </>
      )}
    </Box>
  );
}

export default Carrito;