const FormBuy = () => {
  return (
    <section className="mt-5 flex flex-col gap-4">
      <div>
        <h1 className="text-xl">Complete el formulario para finalizar:</h1>
      </div>
      <form className="flex flex-col items-start gap-2">
        <label>Nombre</label>
        <input
        className="input-style"/>
        <label>N° Documento</label>
        <input
        className="input-style"/>
        <label>Email</label>
        <input
        className="input-style"/>
        <button 
        type="button"
        className="btn-form">Enviar</button>
      </form>
    </section>
  );
};

export default FormBuy;
