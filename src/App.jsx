import './App.css'
import React, { useState } from "react";
import { Container, Box, Typography, Dialog, DialogTitle, DialogContent } from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/Navbar/ItemListContainer";
import Carrusel from "./components/Carrusel/Carrusel";
import Categorias from "./components/Categorias/Categorias";
import Productos from "./components/Productos/Productos";
import Carrito from "./components/Carrito/Carrito";

const categorias = [
  { id: "exterior", nombre: "Plantas de Exterior", imagen: "https://cdn0.uncomo.com/es/posts/8/2/7/las_mejores_plantas_de_exterior_en_maceta_49728_600_square.jpg" },
  { id: "interior", nombre: "Plantas de Interior", imagen: "https://cdn0.ecologiaverde.com/es/posts/4/6/5/plantas_de_interior_grandes_1564_orig.jpg" },
  { id: "artificial", nombre: "Plantas Artificiales", imagen: "https://casaeaster.com/cdn/shop/files/Planta-Decorativa-Artificial-para-Exterior-y-Interior-con-1.20m-Alto_-TRAVELLER-PALM-201098-TR-CasaEaster-226863839_535x.jpg?v=1703276818" },
];

const productos = {
  exterior: [
    { id: 1, nombre: "Palmera", precio: 25000, imagen: "https://cdn0.uncomo.com/es/posts/3/2/7/como_cuidar_una_palmera_areca_50723_orig.jpg" },
    { id: 2, nombre: "Bonsai", precio: 40000, imagen: "https://casaplantavigo.com/blog/wp-content/uploads/2023/01/guia-de-cuidados-para-bonsais-casaplanta-1140x600.jpg" },
  ],
  interior: [
    { id: 3, nombre: "Helecho", precio: 15000, imagen: "https://services.meteored.com/img/article/como-cuidar-y-cultivar-un-helecho-en-casa-consejos-practicos-para-una-planta-sana-1731978854466_1280.jpg" },
    { id: 4, nombre: "Orquídea", precio: 30000, imagen: "https://content.elmueble.com/medio/2023/04/17/como-cuidar-bien-las-orquideas_a0c6db9a_230417104105_1200x630.jpg" },
  ],
  artificial: [
    { id: 5, nombre: "Cactus Artificial", precio: 10000, imagen: "https://cactusworld.club/wp-content/uploads/2022/11/familias-cactus-tipos.webp" },
    { id: 6, nombre: "Bambú Artificial", precio: 20000, imagen: "https://pcfb.gumlet.io/images/articles/bamboo-in-bright-living-room.png?w=640&h=426&mode=crop&crop=smart&s=5d5b5768cc5fee69d94e88dddc475b34" },
  ],
};

function App() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [carrito, setCarrito] = useState([]);
  const [open, setOpen] = useState(false);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <Navbar carritoLength={carrito.length} onCartClick={() => setOpen(true)} />
      <ItemListContainer />
      <Carrusel />
      <Categorias categorias={categorias} onSelectCategoria={setCategoriaSeleccionada} />
      {categoriaSeleccionada && (
        <Productos categoria={categoriaSeleccionada} productos={productos[categoriaSeleccionada]} agregarAlCarrito={agregarAlCarrito} />
      )}
      <Carrito carrito={carrito} open={open} onClose={() => setOpen(false)} />
    </>
  );
}

export default App;

