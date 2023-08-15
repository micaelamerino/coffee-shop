import { useContext } from "react";
import AddButton from "../components/AddButton";
import { Context } from "../context/Context";

const Products = () => {
  const { products } = useContext(Context);

  return (
    <section className="mt-5">
      <div>
        <h1 className="text-xl">Realice su pedido:</h1>
      </div>
      <main className="mt-5 grid grid-cols-2 gap-3">
        {products.length > 0 &&
          products?.map((prod) => (
            <article
              className="bg-white text-black h-52 w-96 flex items-center gap-2 rounded-md border-2 border-amarillo pr-1"
              key={prod.id}
            >
              <div className="h-full w-6/12">
                <img
                  loading="lazy"
                  className="h-full w-full object-cover rounded-tl rounded-bl"
                  src={prod.image}
                  alt={`Imagen del producto ${prod.name}`}
                />
              </div>
              <div className="flex flex-col flex-wrap items-start gap-3 w-9/12">
                <h3 className="text-lg">{prod.name}</h3>
                <p>
                  <b>$ {prod.price}</b>
                </p>
                <p>{prod.description}</p>
                <AddButton prod={prod} />
              </div>
            </article>
          ))}
      </main>
    </section>
  );
};

export default Products;
