import './style.css';

const depoimentos = [
  {
    texto:
      "O espaço de escuta me ajudou a compreender melhor meus sentimentos e a cuidar de mim com mais gentileza.",
    autor: "Paciente, identidade preservada",
  },
  {
    texto:
      "Encontrei acolhimento e segurança para falar sobre questões que eu vinha adiando há muito tempo.",
    autor: "Paciente, identidade preservada",
  },
  {
    texto:
      "A terapia tem contribuído para que eu enfrente os desafios do dia a dia com mais clareza e tranquilidade.",
    autor: "Paciente, identidade preservada",
  },
];

function Depoimentos() {
  return (
    <section className="depoimentos" id="depoimentos">
      <h2>Relatos de quem passou pelo atendimento</h2>
      <p className="depoimentos-intro">
        Relatos compartilhados com autorização, com a identidade totalmente
        preservada.
      </p>

      <div className="depoimentos-grid">
        {depoimentos.map((item) => (
          <article className="depoimento-item" key={item.texto}>
            <p className="depoimento-texto">“{item.texto}”</p>
            <span className="depoimento-autor">{item.autor}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Depoimentos;