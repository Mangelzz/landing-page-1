import { useEffect } from "react";
import CategoriaProductos from "../components/CategoriaProductos";
import Productos from "../components/Productos";

const Home = () => {
  useEffect(() => {
    document.title = "Ecommerce | Home";
  }, [])
  return (
    <>
      <div className="hero"></div>
      <CategoriaProductos />
      <section className="sobre-nosotros">
        <div className="contenedor sobre-nosotros-grid">
          <div className="texto-nosotros">
            <h2>Sobre nosotros</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              praesentium repudiandae placeat quia illo necessitatibus soluta
              natus delectus inventore fugiat.
            </p>
          </div>
        </div>
      </section>
      <Productos />
    </>
  );
};
export default Home;
