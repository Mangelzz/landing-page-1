const ListadoGaleria = ({ imagen }) => {
  return (
    <li>
      <a href={`/assets/images/galeria_0${imagen}.jpg`}>
        <img
          src={`/assets/images/galeria_0${imagen}.jpg`}
          alt="Imagen de galeria"
        />
      </a>
    </li>
  );
};
export default ListadoGaleria;
