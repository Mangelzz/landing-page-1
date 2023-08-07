import { Link } from "react-router-dom";
import imagen1 from "/assets/images/nosotros.jpg";

const ListadoPosts = ({ titulo, descripcion, autor, fecha }) => {
  return (
    <article className="entrada">
      <h2>{titulo}</h2>
      <div className="imagen">
        <img src={imagen1} alt={titulo} />
      </div>

      <div className="entrada-meta">
        <p>
          Fecha: <span>{fecha}</span>
        </p>
        <p>
          Autor: <span>{autor}</span>
        </p>
      </div>

      <div className="entrada-blog">
        <p>{descripcion}</p>
      </div>
      <Link className="btn max-width-30" to={'/entrada'}>Leer articulo</Link>
    </article>
  );
};
export default ListadoPosts;
