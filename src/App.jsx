import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Nosotros from "./pages/Nosotros";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Tienda from "./pages/Tienda";
import Galeria from "./pages/Galeria";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import EntradaBlog from "./pages/EntradaBlog";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Inicio
        </Route>
        <Route path="/nosotros" element={<Nosotros />}>
          Nosotros
        </Route>
        <Route path="/blog" element={<Blog />}>
          Blog
        </Route>
        <Route path="/tienda" element={<Tienda />}>
          Tienda
        </Route>
        <Route path="/galeria" element={<Galeria />}>
          Galería
        </Route>
        <Route path="/contacto" element={<Contacto />}>
          Contacto
        </Route>
        <Route path="/entrada" element={<EntradaBlog />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
export default App;
