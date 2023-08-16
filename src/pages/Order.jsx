import { useContext } from "react";
import { Context } from "../context/Context";
import gif from "../assets/gif.gif";
import Message from "../components/Message";
import QuantityButton from "../components/QuantityButton";
import Swal from "sweetalert2";

const Order = () => {
  const { order, message, setMessage, setOrder } = useContext(Context);

  const total = order.reduce(
    (acc, elem) => acc + elem.price * elem.quantity,
    0
  );

  const deleteMessage = () => {
    setMessage("");
  };

  const finishBuy = () => {
    const generarId = () => {
      let id = Math.random().toString(30).substring(2);
      Swal.fire({
        title: "¡Compra exitosa!",
        text: `El código para retirar el pedido es: ${id}`,
        confirmButtonText: "OK",
        confirmButtonColor: "black",
      });
    };
    generarId();

    setOrder([]);
  };

  return (
    <main className="mt-5 flex flex-col gap-2">
      <div>
        <h1 className="text-xl">Orden de compra:</h1>
      </div>

      {order.length > 0 ? (
        <>
          <div className="mt-5 flex flex-col gap-4">
            {order?.map((p) => (
              <article key={p.id} className="flex flex-col items-start gap-1">
                <h3 className="text-fucsia text-lg">{p.name}</h3>
                <p>$ {p.price * p.quantity}</p>
                <QuantityButton prod={p} />
              </article>
            ))}
            <div>
              {message ? (
                <div>
                  <h3 className="text-amarillo">Aclaración del cliente:</h3>
                  <p>{message}</p>
                  <button onClick={deleteMessage} className="btn-form">
                    Eliminar
                  </button>
                </div>
              ) : (
                <Message />
              )}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p>Total: $ {total}</p>
            <button onClick={finishBuy} type="button" className="btn-form">
              Finalizar compra
            </button>
          </div>
        </>
      ) : (
        <>
          <section className="mt-5 flex flex-col gap-5">
            <h3 className="text-xl">Añada un producto para iniciar su orden</h3>
            <div className="w-40 h-40">
              <img
                className="w-full h-full"
                src={gif}
                alt="Gif de un latte en preparación"
              />
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default Order;
