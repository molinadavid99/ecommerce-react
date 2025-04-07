import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import { useCart } from "../Context/CartContext"; 
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../../firebase/client"; 

const TITULOS_CATEGORIAS = {
  interior: { titulo: "Plantas de Interior", descripcion: "Ideales para decorar y purificar el aire dentro de tu hogar." },
  exterior: { titulo: "Plantas de Exterior", descripcion: "Perfectas para jardines, balcones y espacios abiertos." },
  artificial: { titulo: "Plantas Artificiales", descripcion: "Belleza sin mantenimiento, ideales para cualquier ambiente." }
};

function ItemListContainer() {
  const { categoria } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useCart();

  useEffect(() => {
    const obtenerProductos = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "products")); 
        const productosFirebase = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log("Productos obtenidos de Firebase:", productosFirebase); 

        const productosFiltrados = categoria 
          ? productosFirebase.filter((p) => p.categoryId === categoria) 
          : productosFirebase;

        setProductos(productosFiltrados);
      } catch (error) {
        console.error("Error al cargar productos desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProductos();
  }, [categoria]);

  if (loading) return <Typography variant="h6" align="center">Cargando productos...</Typography>;

  const { titulo, descripcion } = TITULOS_CATEGORIAS[categoria] || { titulo: "Tienda", descripcion: "Explora nuestra variedad de plantas." };

  return (
    <Box sx={{ maxWidth: "80%", margin: "auto", mt: 10, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>{titulo}</Typography>
      <Typography variant="body1" sx={{ mb: 3, color: "gray" }}>{descripcion}</Typography>

      <ItemList productos={productos} agregarAlCarrito={agregarAlCarrito} />
    </Box>
  );
}

export default ItemListContainer;