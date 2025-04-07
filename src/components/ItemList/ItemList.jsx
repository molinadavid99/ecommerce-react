import React from "react"; 
import { Box } from "@mui/material";
import Item from "../Item/Item";

function ItemList({ productos, agregarAlCarrito}) { 
  return (
    <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexWrap: "wrap", p: 2 }}>
      {productos.map((producto) => (
        <Item 
          key={producto.id} 
          producto={producto} 
          agregarAlCarrito={agregarAlCarrito}
        />
      ))}
    </Box>
  );
}

export default ItemList;
