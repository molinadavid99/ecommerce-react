import React from "react";
import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button } from "@mui/material";

function Carrito({ carrito, open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Carrito de Compras</DialogTitle>
      <DialogContent>
        <List>
          {carrito.length > 0 ? (
            carrito.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.nombre} secondary={`$${item.precio}`} />
              </ListItem>
            ))
          ) : (
            <ListItem>
              <ListItemText primary="El carrito está vacío" />
            </ListItem>
          )}
        </List>
        <Button onClick={onClose} variant="contained" color="secondary">
          Cerrar
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default Carrito;
