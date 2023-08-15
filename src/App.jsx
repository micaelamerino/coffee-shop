import Filter from "./components/Filter";
import Header from "./components/Header";
import Order from "./pages/Order";
import Products from "./pages/Products";

function App() {
  return (
    <section className="p-10">
      <Header />
      <Filter />
      <div className="flex content-evenly gap-10">
        <Products />
        <Order />
      </div>
    </section>
  );
}

export default App;
