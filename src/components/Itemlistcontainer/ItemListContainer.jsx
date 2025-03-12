import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

const obtenerProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, nombre: "Palmera", precio: 25000, categoria: "exterior", imagen: "https://cdn0.uncomo.com/es/posts/3/2/7/como_cuidar_una_palmera_areca_50723_orig.jpg" },
        { id: 2, nombre: "Bonsai", precio: 40000, categoria: "exterior", imagen: "https://casaplantavigo.com/blog/wp-content/uploads/2023/01/guia-de-cuidados-para-bonsais-casaplanta-1140x600.jpg" },
        { id: 3, nombre: "Helecho", precio: 15000, categoria: "interior", imagen: "https://services.meteored.com/img/article/como-cuidar-y-cultivar-un-helecho-en-casa-consejos-practicos-para-una-planta-sana-1731978854466_1280.jpg" },
        { id: 4, nombre: "Orquídea", precio: 30000, categoria: "interior", imagen: "https://content.elmueble.com/medio/2023/04/17/como-cuidar-bien-las-orquideas_a0c6db9a_230417104105_1200x630.jpg" },
        { id: 5, nombre: "Cactus Artificial", precio: 10000, categoria: "artificial", imagen: "https://cactusworld.club/wp-content/uploads/2022/11/familias-cactus-tipos.webp" },
        { id: 6, nombre: "Bambú Artificial", precio: 20000, categoria: "artificial", imagen: "https://pcfb.gumlet.io/images/articles/bamboo-in-bright-living-room.png?w=640&h=426&mode=crop&crop=smart&s=5d5b5768cc5fee69d94e88dddc475b34" },
      ]);
    }, 1000);
  });
};

const TITULOS_CATEGORIAS = {
  interior: { titulo: "Plantas de Interior", descripcion: "Ideales para decorar y purificar el aire dentro de tu hogar." },
  exterior: { titulo: "Plantas de Exterior", descripcion: "Perfectas para jardines, balcones y espacios abiertos." },
  artificial: { titulo: "Plantas Artificiales", descripcion: "Belleza sin mantenimiento, ideales para cualquier ambiente." }
};

function ItemListContainer({ agregarAlCarrito }) {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    obtenerProductos()
      .then((data) => {
        const productosFiltrados = categoria ? data.filter((p) => p.categoria === categoria) : data;
        setProductos(productosFiltrados);
      })
      .catch((error) => console.error("Error al cargar productos:", error))
      .finally(() => setLoading(false));
  }, [categoria]);

  if (loading) return <Typography variant="h6" align="center">Cargando productos...</Typography>;

  const { titulo, descripcion } = TITULOS_CATEGORIAS[categoria] || { titulo: "Tienda", descripcion: "Explora nuestra variedad de plantas." };

  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>{titulo} </Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>{descripcion}</Typography>
      <ItemList productos={productos} agregarAlCarrito={agregarAlCarrito} />
    </Box>
  );
}

export default ItemListContainer;

