import React from "react";
import { Box, Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";

function Categorias({ categorias, onSelectCategoria }) {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5"gutterBottom>
        Categorías
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          gap: 2,
        }}
      >
        {categorias.map((categoria) => (
          <Card key={categoria.id} onClick={() => onSelectCategoria(categoria.id)} sx={{ cursor: "pointer" }}>
            <CardActionArea>
              <CardMedia component="img" height="140" image={categoria.imagen} alt={categoria.nombre} />
              <CardContent>
                <Typography variant="h6">{categoria.nombre}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

export default Categorias;
