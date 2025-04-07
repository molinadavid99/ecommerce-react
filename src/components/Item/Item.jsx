import React, { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

function Item({ producto, agregarAlCarrito }) {
  const [mostrarFinalizar, setMostrarFinalizar] = useState(false); 

  const handleAgregar = () => {
    agregarAlCarrito(producto);
    setMostrarFinalizar(true); 
  };

  return (
    <Card sx={{ maxWidth: 250, m: 2, p: 1, textAlign: "center" }}>
      <CardMedia component="img" height="140" image={producto.imagen} alt={producto.title} />
      <CardContent>
        <Typography variant="h6">{producto.title}</Typography>
        <Typography variant="body2" color="textSecondary">Precio: ${producto.price}</Typography>
        <Typography variant="body2" color="textSecondary">Stock: {producto.stock}</Typography>
        
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 1 }}>
          <Button variant="contained" size="small" onClick={handleAgregar}>
            Agregar al carrito
          </Button>
          <Button variant="outlined" size="small" component={Link} to={`/detalle/${producto.id}`}>
            Ver detalle
          </Button>
          
          {mostrarFinalizar && (
            <Button 
              variant="contained" 
              color="success" 
              size="small" 
              component={Link} 
              to="/carrito"
            >
              Finalizar Compra
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Item;
