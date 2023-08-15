import { useContext } from "react";
import { Context } from "../context/Context";

const AddButton = ({ prod }) => {
  const { order, setOrder } = useContext(Context);

  const handleClick = (prod) => {
    const productRepeat = order.find((p) => p.id === prod.id);
    if (productRepeat) {
      setOrder(
        order.map((p) =>
          p.id === prod.id
            ? { ...productRepeat, quantity: productRepeat.quantity + 1 }
            : p
        )
      );
    } else {
      setOrder([...order, prod]);
    }
  };

  return (
    <button
      onClick={() => handleClick(prod)}
      type="button"
      className="bg-fucsia p-2 text-white rounded-md hover:bg-gris hover:text-amarillo duration-500"
    >
      Añadir
    </button>
  );
};

export default AddButton;
