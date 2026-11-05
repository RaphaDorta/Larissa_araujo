import "./style.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-texto">
        <h1>Um espaço de acolhimento para cuidar da sua saúde emocional</h1>
        <p>
          Atendimento psicológico humanizado online e seguro.
        </p>
        <a
          className="hero-botao"
          href="https://wa.me/55SEUNUMEROAQUI?text=Olá! Gostaria de agendar uma sessão."
          target="_blank"
          rel="noreferrer"
        >
          Agende sua sessão pelo WhatsApp
        </a>
      </div>

      <img
        className="hero-imagem"
        src="/img/foto_consultorio.jpg"
        alt="Larissa Araujo, psicóloga"
      />
    </section>
  );
}

export default Hero;