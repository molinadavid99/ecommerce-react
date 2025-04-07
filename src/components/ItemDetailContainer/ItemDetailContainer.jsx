import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../../firebase/client";
import { useCart } from "../Context/CartContext"; 

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { agregarAlCarrito } = useCart(); 

  useEffect(() => {
    const obtenerProducto = async () => {
      setLoading(true);
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          console.log("Producto obtenido de Firebase:", data); 
          setProducto({ id: docSnap.id, ...data });
        } else {
          console.error("No se encontró el producto en Firebase.");
          setProducto(null);
        }
      } catch (error) {
        console.error("Error al cargar el producto desde Firebase:", error);
      } finally {
        setLoading(false);
      }
    };

    obtenerProducto();
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return <ItemDetail producto={producto} agregarAlCarrito={agregarAlCarrito} mostrarFinalizar={false} />;
}

export default ItemDetailContainer;
