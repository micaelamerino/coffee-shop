import { useContext } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Order from "./pages/Order";
import Products from "./pages/Products";
import { Context } from "./context/Context";

function App() {
  const { error, products } = useContext(Context);
  return (
    <section className="p-10">
      <Header />
      <Filter />
      {products.length > 0 ? (
        <div className="flex content-evenly gap-10">
          <Products />
          <Order />
        </div>
      ) : (
        <div>
          <p>{error}</p>
        </div>
      )}
    </section>
  );
}

export default App;
