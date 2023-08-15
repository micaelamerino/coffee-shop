import { useContext } from "react";
import { Context } from "../context/Context";
import FinishButton from "../components/FinishButton";
import gif from "../assets/gif.gif";
import Message from "../components/Message";
import QuantityButton from "../components/QuantityButton";

const Order = () => {
  const { order, message } = useContext(Context);

  const total = order.reduce(
    (acc, elem) => acc + elem.price * elem.quantity,
    0
  );

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
                </div>
              ) : (
                <Message />
              )}
            </div>
          </div>

          <div className="flex flex-col items-start gap-3">
            <p>Total: $ {total}</p>
            <FinishButton />
          </div>
        </>
      ) : (
        <>
          <section className="mt-5 flex flex-col gap-5">
            <h3 className="text-xl">
              Añada un producto para iniciar <s></s>u orden
            </h3>
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
