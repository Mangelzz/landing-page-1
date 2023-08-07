import categoria1 from "/assets/images/categoria1.jpg";
import categoria2 from "/assets/images/categoria2.jpg";
import categoria3 from "/assets/images/categoria3.jpg";

const CategoriaProductos = () => {
  return (
    <div>
      <section className="contenedor categorias">
        <h2>Categorías de productos</h2>
        <div className="listado-categorias">
          <div className="categoria">
            <img src={categoria1} alt="categoria1" />
            <a href="#">Oficina</a>
          </div>
          <div className="categoria">
            <img src={categoria2} alt="categoria2" />
            <a href="#">Hogar</a>
          </div>
          <div className="categoria">
            <img src={categoria3} alt="categoria3" />
            <a href="#">Cocina</a>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CategoriaProductos;
