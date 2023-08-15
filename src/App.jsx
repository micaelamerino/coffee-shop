import { useContext } from "react";
import Filter from "./components/Filter";
import Header from "./components/Header";
import FormBuy from "./pages/FormBuy";
import Order from "./pages/Order";
import Products from "./pages/Products";
import { Context } from "./context/Context";

function App() {
  const { finish } = useContext(Context);
  return (
    <section className="p-10">
      <Header />
      <Filter />
      <div className="flex content-evenly gap-10">
        <Products />
        {finish ? <FormBuy /> : <Order />}
      </div>
    </section>
  );
}

export default App;
