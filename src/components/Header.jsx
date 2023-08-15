import logo from "../assets/coffeeshop.svg";
const Header = () => {
  return (
    <header className="flex justify-center items-center">
      <img
        src={logo}
        alt="Logo de la empresa con el contenido: 'Coffee Shop'"
      />
    </header>
  );
};

export default Header;
