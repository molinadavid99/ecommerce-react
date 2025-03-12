import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent } from "@mui/material";
import { Link } from "react-router-dom";
import Carrusel from "../Carrusel/Carrusel"; 

const productosDestacados = [
  { id: 1, nombre: "Palmera", precio: 25000, imagen: "https://cdn0.uncomo.com/es/posts/3/2/7/como_cuidar_una_palmera_areca_50723_orig.jpg" },
  { id: 2, nombre: "Orquídea", precio: 30000, imagen: "https://content.elmueble.com/medio/2023/04/17/como-cuidar-bien-las-orquideas_a0c6db9a_230417104105_1200x630.jpg" },
];

function Home() {
  return (
    <Box sx={{ textAlign: "center", p: 3 }}>
      <Carrusel /> 
      <Box sx={{ backgroundImage: `url(https://source.unsplash.com/1600x400/?plants)`, backgroundSize: "cover", color: "rgb(0, 107, 0)", p: 4 }}>
        <Typography variant="h1" sx={{ fontWeight: "bold" }}>Bienvenido a Planet</Typography>
        <Typography variant="h6">Las mejores plantas para tu hogar y jardín.</Typography>
        <Button component={Link} to="/tienda/interior" variant="contained" sx={{ mt: 2, backgroundColor: "green" }}>
          Ver Tienda
        </Button>
      </Box>

      <Typography variant="h5" sx={{ mt: 4 }}>Productos Destacados</Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}>
        {productosDestacados.map((producto) => (
          <Card key={producto.id} sx={{ width: 250 }}>
            <CardMedia component="img" height="140" image={producto.imagen} alt={producto.nombre} />
            <CardContent>
              <Typography variant="h6">{producto.nombre}</Typography>
              <Typography variant="body2" color="text.secondary">Precio: ${producto.precio}</Typography>
              <Button component={Link} to="/tienda/interior" variant="contained" color="primary" sx={{ mt: 1 }}>
                Ver más
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Home;
