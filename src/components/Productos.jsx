import ListadoProductos from "./ListadoProductos";

const Productos = () => {
  return (
    <main className="contenido-principal contenedor">
      <h2 className="text-center">Nuestros productos</h2>
      <div className="listado-productos">
        <ListadoProductos
          titulo="Producto 1"
          imagen="1"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium repudiandae placeat quia illo necessitatibus soluta natus delectus inventore fugiat."
          precio="1.000.00"
        />

        <ListadoProductos
          titulo="Producto 2"
          imagen="2"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium repudiandae placeat quia illo necessitatibus soluta natus delectus inventore fugiat."
          precio="2.000.00"
        />

        <ListadoProductos
          titulo="Producto 3"
          imagen="3"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium repudiandae placeat quia illo necessitatibus soluta natus delectus inventore fugiat."
          precio="990.00"
        />

        <ListadoProductos
          titulo="Producto 4"
          imagen="4"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium repudiandae placeat quia illo necessitatibus soluta natus delectus inventore fugiat."
          precio="800.00"
        />

        <ListadoProductos
          titulo="Producto 5"
          imagen="5"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium repudiandae placeat quia illo necessitatibus soluta natus delectus inventore fugiat."
          precio="1.000.00"
        />

        <ListadoProductos
          titulo="Producto 6"
          imagen="6"
          descripcion="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia praesentium repudiandae placeat quia illo necessitatibus soluta natus delectus inventore fugiat."
          precio="1.500.00"
        />
      </div>
    </main>
  );
};
export default Productos;
