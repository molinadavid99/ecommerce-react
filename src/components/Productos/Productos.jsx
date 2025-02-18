import React from "react";
import { Box, Card, CardMedia, CardContent, Typography, Button } from "@mui/material";

function Productos({ categoria, productos, agregarAlCarrito }) {
  return (
    <Box sx={{ padding: 2, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Productos de {categoria}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {productos.map((producto) => (
          <Card
            key={producto.id}
            sx={{
              padding: 1,
              cursor: "pointer",
              width: 250, 
              textAlign: "center",
            }}
          >
            <CardMedia component="img" height="140" image={producto.imagen} alt={producto.nombre} />
            <CardContent>
              <Typography variant="h6" fontWeight="bold" color="green">
                {producto.nombre}
              </Typography>
              <Typography variant="body2">${producto.precio}</Typography>
              <Button variant="contained" color="primary" fullWidth onClick={() => agregarAlCarrito(producto)}>
                Agregar al Carrito
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Productos;
