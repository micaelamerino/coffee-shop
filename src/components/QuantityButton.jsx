import { useContext } from "react";
import { Context } from "../context/Context";

const QuantityButton = ({ prod }) => {
  const { order, setOrder } = useContext(Context);

  const addQuantity = () => {
    const productRepeat = order.find((p) => p.id === prod.id);
    if (productRepeat) {
      setOrder(
        order.map((p) =>
          p.id === prod.id
            ? { ...productRepeat, quantity: productRepeat.quantity + 1 }
            : p
        )
      );
    }
  };

  const decreaseQuantity = () => {
    const productRepeat = order.find((p) => p.id === prod.id);
    if (prod.quantity > 1 && productRepeat) {
      setOrder(
        order.map((p) =>
          p.id === prod.id
            ? { ...productRepeat, quantity: productRepeat.quantity - 1 }
            : p
        )
      );
    }
  };

  const deleteProduct = () => {
    const newArray = order.filter((p) => p.id !== prod.id);
    setOrder(newArray);
  };

  return (
    <div className="flex gap-2">
      <div className="flex items-center justify-center gap-3 px-2  py-1 border border-amarillo rounded-md">
        <button onClick={decreaseQuantity}>-</button>
        <span>{prod.quantity}</span>
        <button onClick={addQuantity}>+</button>
      </div>
      <button
        onClick={deleteProduct}
        className="px-2  py-1 border border-amarillo rounded-md hover:bg-fucsia duration-500"
      >
        Eliminar
      </button>
    </div>
  );
};

export default QuantityButton;
