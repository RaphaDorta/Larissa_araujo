import { useRef, useState } from "react";
import "./style.css";

function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const botaoMenu = useRef(null);

  function fecharComEscape(event) {
    if (event.key === "Escape" && menuAberto) {
      setMenuAberto(false);
      botaoMenu.current?.focus();
    }
  }

  return (
    <header className="header" onKeyDown={fecharComEscape}>
      <a href="#inicio" className="marca" onClick={() => setMenuAberto(false)}>
        <img src={`${import.meta.env.BASE_URL}img/Larissa-Araujo-transparente.png`} alt="Psicóloga Larissa Araujo" className="marca-icone" />
      </a>

      <button
        ref={botaoMenu}
        type="button"
        className="menu-toggle"
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        <span aria-hidden="true">{menuAberto ? "✕" : "☰"}</span>
        {menuAberto ? "Fechar" : "Menu"}
      </button>

      <nav
        id="menu-principal"
        className={`menu${menuAberto ? " menu-aberto" : ""}`}
        aria-label="Navegação principal"
        onClick={(event) => {
          if (event.target.closest("a")) setMenuAberto(false);
        }}
      >
        <a href="#sobre">Sobre</a>
        <a href="#atendimento">Atendimento</a>
        <a href="#como-funciona">Como funciona</a>
        <a href="#faq">Dúvidas</a>
        <a href="https://wa.me/+5519992564445?text=Olá! Gostaria de agendar uma sessão." target="_blank" rel="noreferrer" className="menu-botao">Agendar</a>
      </nav>
    </header>
  );
}

export default Header;
