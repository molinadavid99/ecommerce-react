import React, { useState } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import Swal from "sweetalert2"; // Importamos SweetAlert2

const CONTACT_INFO = [
  { label: "Email", value: "planet@business.com" },
  { label: "Teléfono", value: "+54 123 456 789" },
  { label: "Dirección", value: "Calle Plantas 123, Buenos Aires, Argentina" },
  { label: "Horario", value: "Lunes a Viernes de 9:00 a 18:00" }
];

const SOCIAL_MEDIA = [
  { icon: <Facebook />, url: "https://www.facebook.com", label: "Facebook" },
  { icon: <Instagram />, url: "https://www.instagram.com", label: "Instagram" },
  { icon: <WhatsApp />, url: "https://wa.me/549123456789", label: "WhatsApp" }
];

function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.mensaje) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor completa todos los campos."
      });
      return;
    }

    console.log("Mensaje enviado:", form);

    Swal.fire({
      icon: "success",
      title: "¡Mensaje enviado!",
      text: "Nos pondremos en contacto contigo pronto.",
      showConfirmButton: false,
      timer: 2000
    });

    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <Box sx={{ maxWidth: 600, margin: "auto", textAlign: "center", mt: 5, p: 3 }}>
      <Typography variant="h4" gutterBottom>Contacto</Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Nombre"
          name="nombre"
          value={form.nombre}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Mensaje"
          name="mensaje"
          multiline
          rows={4}
          value={form.mensaje}
          onChange={handleChange}
          required
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="warning" type="submit">
          Enviar mensaje
        </Button>
      </form>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Información de Contacto</Typography>
        {CONTACT_INFO.map((info, index) => (
          <Typography key={index}>
            {info.label}: {info.value}
          </Typography>
        ))}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography variant="h6">Síguenos en nuestras redes</Typography>
        {SOCIAL_MEDIA.map((social, index) => (
          <IconButton
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            {social.icon}
          </IconButton>
        ))}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Nuestra Ubicación</Typography>
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26278.34577625196!2d-58.4103343!3d-34.6036844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb7e42c9f2b1%3A0xdff87b05df6d8665!2sBuenos%20Aires!5e0!3m2!1ses!2sar!4v1712097400000!5m2!1ses!2sar"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </Box>
    </Box>
  );
}

export default Contacto;
