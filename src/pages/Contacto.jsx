import { useEffect } from "react";

const Contacto = () => {
  useEffect(() => {
    document.title = "Ecommerce | Contacto";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("enviando formulario");
  };

  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Contacto</h2>

      <form onSubmit={handleSubmit} className="formulario">
        <fieldset>
          <legend>Información Personal</legend>
          <div className="campo">
            <label htmlFor="nombre">Nombre:</label>
            <input id="nombre" type="text" placeholder="Coloca tu nombre" />
          </div>
          <div className="campo">
            <label htmlFor="asunto">Asunto:</label>
            <input id="asunto" type="text" placeholder="Coloca el asunto" />
          </div>
          <div className="campo">
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" placeholder="Coloca tu Email" />
          </div>
          <div className="campo">
            <label htmlFor="telefono">telefono:</label>
            <input id="telefono" type="tel" placeholder="Coloca tu telefono" />
          </div>
          <div className="campo">
            <label htmlFor="mensaje">Mensaje:</label>
            <textarea
              name="mensaje"
              id="mensaje"
              cols="20"
              rows="10"
            ></textarea>
          </div>
        </fieldset>

        <fieldset>
          <legend>País</legend>
          <div className="campo">
            <label htmlFor="pais">País:</label>
            <select name="pais" id="pais">
              <option value="" disabled>
                -- Seleccione --
              </option>
              <option value="ES">España</option>
              <option value="MX">México</option>
              <option value="AR">Argentina</option>
              <option value="CO">Colombia</option>
              <option value="CR">Costa Rica</option>
            </select>
          </div>
        </fieldset>

        <fieldset>
          <legend>Informaxión extra</legend>
          <div className="campo">
            <label htmlFor="cliente">Cliente</label>
            <input type="radio" name="tipo" id="cliente" />
          </div>
          <div className="campo">
            <label htmlFor="proveedor">Proveedor</label>
            <input type="radio" name="tipo" id="proveedor" />
          </div>
          <div className="campo">
            <label htmlFor="categoria">Categoría de interés</label>
            <input
              list="categorias"
              name="categorias"
              className="input-datalist"
            />
            <datalist id="categorias">
              <option value="cocina" />
              <option value="jardinería" />
              <option value="electrónica" />
              <option value="ferretería" />
            </datalist>
          </div>
        </fieldset>
        <input className="btn" type="submit" value="Enviar" />
      </form>
    </main>
  );
};
export default Contacto;
