import { Link } from "react-router-dom";
import imagen1 from "/assets/images/nosotros.jpg";

const EntradaBlog = () => {
    return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Entrada Blog</h2>
      <article className="entrada contenido-entrada-blog">
      <h2>Guia colores</h2>
      <div className="imagen">
        <img src={imagen1} alt='Guia colores' />
      </div>

        <div className="contenedor-blog-central">
          <div className="entrada-meta">
            <p>
              Fecha: <span>1 de Enero del 2023</span>
            </p>
            <p>
              Autor: <span>TiendaMuebles</span>
            </p>
          </div>

          <div className="entrada-blog">
            <p>Sed velit lorem, egestas nec consequat vitae, tempor et risus. Donec tempor aliquet orci id eleifend. Nunc malesuada posuere nibh, feugiat sodales justo fermentum in. Cras bibendum accumsan erat et tristique. Quisque maximus laoreet diam, quis iaculis est suscipit eu. In tristique massa vitae consequat vulputate. Vivamus hendrerit nec nisl ut vestibulum. Duis placerat, leo a lobortis gravida, risus sem finibus lorem, vel varius erat massa aliquet lorem. Fusce auctor nisi et tellus tristique, ut consequat purus faucibus. Vestibulum hendrerit aliquam magna. Etiam tincidunt blandit leo vitae aliquam.</p>
          </div>
          <Link className="btn max-width-30" to={'/blog'}>Volver a blog</Link>
        </div>
    </article>
    </main>
  );
};
export default EntradaBlog;