import "./style.css";

function Header() {
  return (
    <header className="header">
      <a href="#inicio" className="marca">
        <img src={`${import.meta.env.BASE_URL}img/Larissa-Araujo-transparente.png`} alt="Psicóloga Larissa Araujo" className="marca-icone" />
      </a>

      <nav className="menu">
        <a href="#sobre">Sobre</a>
        <a href="#atendimento">Atendimento</a>
        <a href="#contato" className="menu-botao">Agendar</a>
      </nav>
    </header>
  );
}

export default Header;