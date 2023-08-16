import { createContext, useEffect, useState } from "react";

export const Context = createContext();

const Data = ({ children }) => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [order, setOrder] = useState([]);
  const [message, setMessage] = useState("");
 

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/products.json");
        const json = await response.json();
        const info = json.products;
        setData(info);
        setProducts(info);
      } catch (error) {
        if (error) {
          setError("No se encontró la información solicitada");
        }
      }
    };
    getData();
  }, []);

  return (
    <Context.Provider
      value={{
        data,
        products,
        setProducts,
        order,
        setOrder,
        message,
        setMessage,
        error
      }}
    >
      {children}
    </Context.Provider>
  );
};
export default Data;
