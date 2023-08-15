import { useContext, useState } from "react";
import { Context } from "../context/Context";

const Filter = () => {
  const { data, setProducts } = useContext(Context);
  const [search, setSearch] = useState("");
  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filterProducts = data.filter((prod) =>
      prod.name.toLowerCase().includes(search.toLowerCase())
    );
    if (search === "") {
      setAlert("*Debe ingresar un producto");
    } else if (filterProducts.length > 0) {
      setProducts(filterProducts);
      setAlert("");
    } else {
      setProducts(data);
      setAlert("*No se encontró el producto, pruebe con otro nombre");
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <form onSubmit={handleSubmit} className="mt-5 flex items-center gap-2">
        <label htmlFor="name">Ingrese un producto: </label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          placeholder="Latte, jugo, muffin..."
          className="input-style"
          autoComplete="on"
        />
        <button
          type="submit"
          className="btn-form"
        >
          Buscar
        </button>
      </form>
      <div className="h-5">
        <p className="text-red-500">{alert}</p>
      </div>
    </div>
  );
};

export default Filter;
