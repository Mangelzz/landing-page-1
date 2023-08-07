const ListadoProductos = ({ titulo, imagen, descripcion, precio }) => {
  return (
    <div className="producto">
      <img
        src={`/assets/images/producto${imagen}.jpg`}
        alt={titulo}
      />
      <div className="info-producto">
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p className="precio">${precio}</p>
        <a className="btn" href="#">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};
export default ListadoProductos;
