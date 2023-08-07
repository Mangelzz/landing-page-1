import { useEffect } from "react";
import ListadoPosts from "../components/ListadoPosts";
import ListadoEntradas from "../components/ListadoEntradas";

const Blog = () => {
  useEffect(() => {
    document.title = "Ecommerce | Blog";
  }, []);
  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Nuestro Blog</h2>

      <section className="contenedor-blog">
        <div className="blog">
          <ListadoPosts
            titulo={"Guía de colores"}
            fecha={"1 de Enero del 2023"}
            autor={"TiendaMuebles"}
            descripcion={
              "Sed velit lorem, egestas nec consequat vitae, tempor et risus. Donec tempor aliquet orci id eleifend. Nunc malesuada posuere nibh, feugiat sodales justo fermentum in. Cras bibendum accumsan erat et tristique. Quisque maximus laoreet diam, quis iaculis est suscipit eu. In tristique massa vitae consequat vulputate. Vivamus hendrerit nec nisl ut vestibulum. Duis placerat, leo a lobortis gravida, risus sem finibus lorem, vel varius erat massa aliquet lorem. Fusce auctor nisi et tellus tristique, ut consequat purus faucibus. Vestibulum hendrerit aliquam magna. Etiam tincidunt blandit leo vitae aliquam."
            }
          />
          <ListadoPosts
            titulo={"Nuevos modelos 2023"}
            fecha={"10 de Febrero del 2023"}
            autor={"TiendaMuebles"}
            descripcion={
              "Sed velit lorem, egestas nec consequat vitae, tempor et risus. Donec tempor aliquet orci id eleifend. Nunc malesuada posuere nibh, feugiat sodales justo fermentum in. Cras bibendum accumsan erat et tristique. Quisque maximus laoreet diam, quis iaculis est suscipit eu. In tristique massa vitae consequat vulputate. Vivamus hendrerit nec nisl ut vestibulum. Duis placerat, leo a lobortis gravida, risus sem finibus lorem, vel varius erat massa aliquet lorem. Fusce auctor nisi et tellus tristique, ut consequat purus faucibus. Vestibulum hendrerit aliquam magna. Etiam tincidunt blandit leo vitae aliquam."
            }
          />
        </div>
        <aside>
          <h3>Otras entradas de Blog</h3>
          <ul>
            <ListadoEntradas nombre={"Guía para colores."} />
            <ListadoEntradas nombre={"Nuevos modelos 2023"} />
            <ListadoEntradas nombre={"Guía para decorar tu hogar."} />
            <ListadoEntradas nombre={"Guía para diseños de interiores."} />
          </ul>
        </aside>
      </section>
    </main>
  );
};
export default Blog;
