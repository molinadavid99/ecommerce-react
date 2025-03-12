import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", form);
    alert("Mensaje enviado con éxito!");
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", textAlign: "center", mt: 5, p: 3 }}>
      <Typography variant="h4" gutterBottom>Contacto</Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField fullWidth label="Nombre" name="nombre" value={form.nombre} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Email" name="email" type="email" value={form.email} onChange={handleChange} required sx={{ mb: 2 }} />
        <TextField fullWidth label="Mensaje" name="mensaje" multiline rows={4} value={form.mensaje} onChange={handleChange} required sx={{ mb: 2 }} />
        <Button variant="contained" color="warning" type="submit">Enviar mensaje</Button>
      </form>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Información de Contacto</Typography>
        <Typography>Email: planet@bussiness.com</Typography>
        <Typography>Teléfono: +54 123 456 789</Typography>
        <Typography>Dirección: Calle Plantas 123, Buenos Aires, Argentina</Typography>
        <Typography>Horario: Lunes a Viernes de 9:00 a 18:00</Typography>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Síguenos en nuestras redes</Typography>
        <IconButton href="https://www.facebook.com" target="_blank"><Facebook /></IconButton>
        <IconButton href="https://www.instagram.com" target="_blank"><Instagram /></IconButton>
        <IconButton href="https://wa.me/549123456789" target="_blank"><WhatsApp /></IconButton>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Nuestra Ubicación</Typography>
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?..."
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        />
      </Box>
    </Box>
  );
}

export default Contacto;