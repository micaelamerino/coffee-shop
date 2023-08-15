import { useContext } from "react";
import { Context } from "../context/Context";

const Message = () => {
  const { setMessage } = useContext(Context);

  let text = "";
  const handleChange = (e) => {
    text = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(text);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1">
      <label htmlFor="message">¿Desea realizar alguna modificación?</label>
      <textarea
        onChange={handleChange}
        id="message"
        className="rounded-md h-36 bg-gris border border-amarillo text-white"
      ></textarea>
      <button className="btn-form">Enviar</button>
    </form>
  );
};

export default Message;
