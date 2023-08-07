import { useEffect } from "react";
import Productos from "../components/Productos";

const Tienda = () => {
  useEffect(() => {
    document.title = "Ecommerce | Tienda";
  }, []);

  return (
    <>
      <Productos />
    </>
  );
};
export default Tienda;
