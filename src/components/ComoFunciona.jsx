import './style.css';
import WhatsAppIcon from "./WhatsAppIcon";

const passos = [
  {
    numero: "1",
    titulo: "Agendamento pelo WhatsApp",
    texto:
      "Você me envia uma mensagem, conversamos rapidamente e escolhemos juntos o melhor dia e horário para você.",
  },
  {
    numero: "2",
    titulo: "A sessão",
    texto:
      "Cada encontro tem duração de 50 minutos, em um ambiente seguro, acolhedor e sigiloso, presencial ou online.",
  },
  {
    numero: "3",
    titulo: "O acompanhamento",
    texto:
      "Os encontros costumam ser semanais, para trabalharmos suas demandas com continuidade e no seu tempo.",
  },
];

function ComoFunciona() {
  return (
    <section className="como" id="como-funciona">
      <h2>Como funciona a terapia?</h2>
      <p className="como-intro">
        Começar pode parecer difícil, por isso o caminho é simples e sem
        pressa.
      </p>

      <ol className="como-passos">
        {passos.map((passo) => (
          <li className="como-passo" key={passo.numero}>
            <span className="como-numero">{passo.numero}</span>
            <h3>{passo.titulo}</h3>
            <p>{passo.texto}</p>
          </li>
        ))}
      </ol>

      <a
        className="hero-botao"
        href="https://wa.me/55SEUNUMEROAQUI?text=Olá! Gostaria de agendar uma sessão."
        target="_blank"
        rel="noreferrer"
      >
        <WhatsAppIcon />
        Quero agendar minha sessão
      </a>
    </section>
  );
}

export default ComoFunciona;