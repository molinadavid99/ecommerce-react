import { doc, updateDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/client";

export const actualizarStock = async (idProducto, cantidadComprada) => {
  try {
    const productoRef = doc(db, "products", idProducto);
    const productoSnap = await getDoc(productoRef);

    if (productoSnap.exists()) {
      const productoData = productoSnap.data();
      const nuevoStock = productoData.stock - cantidadComprada;

      if (nuevoStock >= 0) {
        await updateDoc(productoRef, { stock: nuevoStock });
        console.log("Stock actualizado correctamente");
      } else {
        console.error("No hay suficiente stock disponible");
      }
    } else {
      console.error("El producto no existe");
    }
  } catch (error) {
    console.error("Error actualizando el stock:", error);
  }
};
