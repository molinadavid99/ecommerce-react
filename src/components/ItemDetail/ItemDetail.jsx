import React, { useState } from "react";  
import { Card, CardMedia, CardContent, Typography, Button, Box } from "@mui/material";
import { useCart } from "../Context/CartContext";  
import { Link } from "react-router-dom"; 

function ItemDetail({ producto }) {
  if (!producto) return null; 

  const { agregarAlCarrito } = useCart();  
  const [mostrarFinalizar, setMostrarFinalizar] = useState(false); 

  const handleAgregar = () => {
    const itemCarrito = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      imagen: producto.imagen,
      cantidad: 1,
    };

    agregarAlCarrito(itemCarrito);
    setMostrarFinalizar(true); 
  };

  return (
    <Card sx={{ maxWidth: 400, margin: "auto", mt: 5, textAlign: "center", p: 2 }}>
      <CardMedia component="img" height="250" image={producto.imagen} alt={producto.title} />
      <CardContent>
        <Typography variant="h5">{producto.title}</Typography>
        <Typography variant="body1" color="text.secondary">Precio: ${producto.price}</Typography>
        <Typography variant="body2" color="text.secondary">Stock: {producto.stock}</Typography>
        <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
          {producto.description}
        </Typography>

        <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 1 }}>
          <Button variant="contained" color="primary" onClick={handleAgregar}>
            Agregar al carrito
          </Button>
          
          {mostrarFinalizar && (  
            <Button component={Link} to="/carrito" variant="contained" color="success">
              Finalizar Compra
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}

export default ItemDetail;