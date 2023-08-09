import { useEffect } from "react";
import ListadoGaleria from "../components/ListadoGaleria";

const Galeria = () => {
  useEffect(() => {
    document.title = "Ecommerce | Galeria";
  }, [])
  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Galería</h2>
      <ul className="galeria">
        <ListadoGaleria imagen={"1"} />
        <ListadoGaleria imagen={"2"} />
        <ListadoGaleria imagen={"3"} />
        <ListadoGaleria imagen={"4"} />
        <ListadoGaleria imagen={"5"} />
        <ListadoGaleria imagen={"6"} />
        <ListadoGaleria imagen={"7"} />
        <ListadoGaleria imagen={"8"} />
        <ListadoGaleria imagen={"9"} />
      </ul>
    </main>
  );
};
export default Galeria;
