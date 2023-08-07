import { useEffect } from "react";

const Nosotros = () => {

  useEffect(() => {
    document.title = "Ecommerce | Nosotros";
  }, [])

  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Sobre nosotros</h2>
      <div className="contenido-nosotros">
        <div className="imagen">
          <img
            src="assets/images/nosotros.jpg"
            alt="Imagen sobre nosotros"
          />
        </div>
        <div className="info-nosotros">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
            quidem eius quia corrupti aspernatur in sed a laudantium doloremque,
            expedita porro blanditiis impedit. Adipisci quidem odit earum ipsa
            deserunt ea incidunt, doloribus sequi voluptate illo. Sint dolores
            rem eligendi optio recusandae, molestias, et quas tempore, ipsa
            quaerat sed quia odio.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
            praesentium in veritatis delectus, aperiam accusamus porro ipsa
            iusto. Commodi, explicabo!
          </p>
        </div>
      </div>
    </main>
  );
};
export default Nosotros;
