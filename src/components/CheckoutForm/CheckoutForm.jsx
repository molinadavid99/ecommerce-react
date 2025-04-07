import React, { useState } from "react"; 
import { Box, Button, TextField, Typography } from "@mui/material";
import { useCart } from "../Context/CartContext";  
import { db } from "../../firebase/client"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import Swal from 'sweetalert2';


function CheckoutForm({ carrito }) {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: ""
  });

  const { vaciarCarrito } = useCart();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calcularTotal = () => {
    return carrito.reduce((acc, item) => acc + item.price * item.cantidad, 0);
  };

const handleSubmit = async () => {
  const order = {
    buyer: formData,
    items: carrito.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      cantidad: item.cantidad
    })),
    total: calcularTotal(),
    date: serverTimestamp()
  };

  try {
    const docRef = await addDoc(collection(db, "orders"), order); 
    vaciarCarrito(); 
    Swal.fire({
      title: '¡Gracias por tu compra!',
      text: `Tu código de compra es: ${docRef.id}`,
      icon: 'success',
      confirmButtonText: 'Aceptar'
    });
  } catch (error) {
    console.error("Error al generar la orden:", error);
    Swal.fire({
      title: 'Lo siento...',
      text: 'Hubo un error al procesar tu compra.',
      icon: 'error',
      confirmButtonText: 'Intentar de nuevo'
    });
  }
};

  return (
    <Box sx={{ mt: 4, p: 3, border: "1px solid #ccc", borderRadius: 2, maxWidth: "600px", margin: "auto" }}>
      <Typography variant="h5" gutterBottom>Resumen de Compra</Typography>
      
      <TextField 
        fullWidth 
        label="Nombre" 
        name="nombre" 
        value={formData.nombre} 
        onChange={handleChange} 
        sx={{ mb: 2 }}
      />
      <TextField 
        fullWidth 
        label="Teléfono" 
        name="telefono" 
        value={formData.telefono} 
        onChange={handleChange} 
        sx={{ mb: 2 }}
      />
      <TextField 
        fullWidth 
        label="Email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        sx={{ mb: 2 }}
      />

      <Typography variant="h6" gutterBottom>Productos:</Typography>
      {carrito.map((item, index) => (
        <Typography key={index}>
          {item.title} - {item.cantidad} x ${item.price}
        </Typography>
      ))}

      <Typography variant="h6" sx={{ mt: 2 }}>
        Total: ${calcularTotal()}
      </Typography>

      <Button variant="contained" color="success" sx={{ mt: 3 }} onClick={handleSubmit}>
        Confirmar Compra
      </Button>
    </Box>
  );
}

export default CheckoutForm;