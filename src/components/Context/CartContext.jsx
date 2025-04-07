import { createContext, useContext, useState, useMemo } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      const existe = prevCarrito.find((item) => item.id === producto.id);
      if (existe) {
        return prevCarrito.map((item) =>
          item.id === producto.id 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item
        );
      } else {
        return [
          ...prevCarrito, 
          { 
            id: producto.id,
            title: producto.title, 
            price: producto.price, 
            imagen: producto.imagen, 
            cantidad: 1
          }
        ];
      }
    });
};

  const eliminarDelCarrito = (id) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== id));
  };

  const actualizarCantidad = (id, cantidad) => {
    setCarrito((prevCarrito) =>
      prevCarrito.map((item) =>
        item.id === id ? { ...item, cantidad: cantidad > 0 ? cantidad : 1 } : item
      )
    );
  };

  const totalPagar = useMemo(() => {
    return carrito.reduce((total, item) => total + item.price * item.cantidad, 0);
  }, [carrito]);

  const vaciarCarrito = () => {
    setCarrito([]);  
  };

  return (
    <CartContext.Provider value={{ carrito, agregarAlCarrito, eliminarDelCarrito, actualizarCantidad, totalPagar, vaciarCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
