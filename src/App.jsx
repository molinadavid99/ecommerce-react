import "./App.css";
import React, { useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Carrito from "./components/Carrito/Carrito";
import Contacto from "./components/Contacto/Contacto";
import Home from "./components/Home/Home";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [carritoAbierto, setCarritoAbierto] = useState(false);
  const navigate = useNavigate();

  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => [...prevCarrito, producto]);
  };

  const handleCartClick = () => {
    navigate("/carrito"); 
    setCarritoAbierto(true);
  };

  return (
    <>
      <Navbar carritoLength={carrito.length} onCartClick={handleCartClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tienda/:categoria" element={<ItemListContainer agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/detalle/:id" element={<ItemDetailContainer agregarAlCarrito={agregarAlCarrito} />} />
        <Route path="/carrito" element={<Carrito carrito={carrito} abierto={carritoAbierto} setAbierto={setCarritoAbierto} />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;



