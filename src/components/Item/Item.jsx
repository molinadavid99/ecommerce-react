import React from "react";
import { Card, CardMedia, CardContent, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function Item({ producto, agregarAlCarrito }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia component="img" height="140" image={producto.imagen} alt={producto.nombre} />
      <CardContent>
        <Typography variant="h6">{producto.nombre}</Typography>
        <Typography variant="body2" color="text.secondary">
          Precio: ${producto.precio}
        </Typography>
        <Button
          variant="contained"
          color="warning"
          sx={{ mt: 1 }}
          onClick={() => agregarAlCarrito(producto)}
        >
          Agregar al carrito
        </Button>
        <Button
          component={Link}
          to={`/detalle/${producto.id}`}
          variant="outlined"
          color="primary"
          sx={{ mt: 1, ml: 1 }}
        >
          Ver más
        </Button>
      </CardContent>
    </Card>
  );
}

export default Item;
