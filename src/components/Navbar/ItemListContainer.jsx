import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";

function ItemListContainer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        borderRadius: "12px",
        maxWidth: "600px",
        margin: "20px auto",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#81B662",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)", 
          fontFamily: "'Poppins', sans-serif", 
        }}
      >
        Bienvenido a PLANET
      </Typography>
    </Box>
  );
}

export default ItemListContainer;
