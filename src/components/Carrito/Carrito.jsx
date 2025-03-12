import React from "react";
import { Modal, Box, Typography, Button, List, ListItem, ListItemText } from "@mui/material";

function Carrito({ carrito, abierto, setAbierto }) {
  const handleClose = () => setAbierto(false); 

  return (
    <Modal open={abierto} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          🛒 Carrito de Compras
        </Typography>

        {carrito.length === 0 ? (
          <Typography variant="body1">Tu carrito está vacío.</Typography>
        ) : (
          <List>
            {carrito.map((producto, index) => (
              <ListItem key={index} sx={{ borderBottom: "1px solid #ddd" }}>
                <ListItemText primary={producto.nombre} secondary={`$${producto.precio}`} />
              </ListItem>
            ))}
          </List>
        )}

        <Button onClick={handleClose} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
}

export default Carrito;
