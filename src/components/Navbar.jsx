import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <h1 className="nombre-sitio">
          Tienda <span>Muebles</span>
        </h1>
      </header>

      <div className="contenedor-nav">
        <nav className="nav-principal contenedor">
          <NavLink className={({isActive}) => isActive ? 'active': ''} to={"/"}>Inicio</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active': ''} to={"/nosotros"}>Nosotros</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active': ''} to={"/tienda"}>Tienda</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active': ''} to={"/blog"}>Blog</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active': ''} to={"/galeria"}>Galería</NavLink>
          <NavLink className={({isActive}) => isActive ? 'active': ''} to={"/contacto"}>Contacto</NavLink>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
