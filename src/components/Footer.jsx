const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="grid-footer contenedor">
        <div>
          <h3>Categorías</h3>
          <nav className="footer-menu">
            <a href="#">Cocina</a>
            <a href="#">Oficina</a>
            <a href="#">Jardín</a>
            <a href="#">Cochera</a>
            <a href="#">Dormitorios</a>
          </nav>
        </div>

        <div>
          <h3>Sobre nosotros</h3>
          <nav className="footer-menu">
            <a href="#">Nuestra historia</a>
            <a href="#">Misión, Visión y valores</a>
            <a href="#">Carreras</a>
            <a href="#">Póliticas de privacidad</a>
            <a href="#">Terminos del servicio</a>
          </nav>
        </div>

        <div>
          <h3>Soporte</h3>
          <nav className="footer-menu">
            <a href="#">Preguntas frecuentes</a>
            <a href="#">Ayuda</a>
            <a href="#">Confianza y seguridad</a>
          </nav>
        </div>
      </div>
      <p className="copy">Todos los derechos reservados 2023</p>
    </footer>
  );
};
export default Footer;
