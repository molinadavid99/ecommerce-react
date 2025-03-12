import React from "react";
import { Card, CardMedia, CardContent, Typography, Button, CardActions } from "@mui/material";

function ItemDetail({ producto, agregarAlCarrito }) {
  return (
    <Card sx={{ maxWidth: 345, margin: "auto", boxShadow: 3, mt: 14 }}>
      <CardMedia component="img" height="250" image={producto.imagen} alt={producto.nombre} />

      <CardContent>
        <Typography variant="h5" component="div" sx={{ fontWeight: "bold", color: "green" }}>
          {producto.nombre}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Precio: ${producto.precio}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Stock disponible: {producto.stock}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          color="warning"
          onClick={() => agregarAlCarrito(producto)}
          fullWidth
        >
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
}

export default ItemDetail;
