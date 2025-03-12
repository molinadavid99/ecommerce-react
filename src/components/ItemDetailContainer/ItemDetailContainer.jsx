import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";

const obtenerProductoPorId = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const productos = [
        { id: 1, nombre: "Palmera", precio: 25000, stock: 5, categoria: "exterior", imagen: "https://cdn0.uncomo.com/es/posts/3/2/7/como_cuidar_una_palmera_areca_50723_orig.jpg" },
        { id: 2, nombre: "Bonsai", precio: 40000, stock: 3, categoria: "exterior", imagen: "https://casaplantavigo.com/blog/wp-content/uploads/2023/01/guia-de-cuidados-para-bonsais-casaplanta-1140x600.jpg" },
        { id: 3, nombre: "Helecho", precio: 15000, stock: 10, categoria: "interior", imagen: "https://services.meteored.com/img/article/como-cuidar-y-cultivar-un-helecho-en-casa-consejos-practicos-para-una-planta-sana-1731978854466_1280.jpg" },
        { id: 4, nombre: "Orquídea", precio: 30000, stock: 8, categoria: "interior", imagen: "https://content.elmueble.com/medio/2023/04/17/como-cuidar-bien-las-orquideas_a0c6db9a_230417104105_1200x630.jpg" },
        { id: 5, nombre: "Cactus Artificial", precio: 10000, stock: 15, categoria: "artificial", imagen: "https://cactusworld.club/wp-content/uploads/2022/11/familias-cactus-tipos.webp" },
        { id: 6, nombre: "Bambú Artificial", precio: 20000, stock: 7, categoria: "artificial", imagen: "https://pcfb.gumlet.io/images/articles/bamboo-in-bright-living-room.png?w=640&h=426&mode=crop&crop=smart&s=5d5b5768cc5fee69d94e88dddc475b34" },
      ];
      resolve(productos.find((producto) => producto.id === Number(id)));
    }, 1000);
  });
};

function ItemDetailContainer({ agregarAlCarrito }) {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    obtenerProductoPorId(id)
      .then((data) => setProducto(data))
      .catch((error) => console.error("Error al cargar el producto:", error))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Cargando...</p>;
  if (!producto) return <p>Producto no encontrado</p>;

  return <ItemDetail producto={producto} agregarAlCarrito={agregarAlCarrito} />;
}

export default ItemDetailContainer;
