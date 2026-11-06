import './style.css';

const dores = [
  {
    titulo: "Ansiedade e emoções",
    texto: "Sente dificuldade em lidar com suas emoções, preocupações ou pensamentos que parecem não desacelerar?",
  },
  {
    titulo: "Autoconhecimento",
    texto: "Deseja compreender melhor seus sentimentos, comportamentos e desenvolver uma relação mais saudável consigo mesmo?",
  },
  {
    titulo: "Relacionamentos e vínculos",
    texto: "Enfrenta dificuldades nos relacionamentos, na comunicação ou em estabelecer limites?",
  },
  {
    titulo: "Estresse e sobrecarga emocional",
    texto: "Sente-se constantemente sobrecarregado e encontra dificuldade para equilibrar as demandas da vida?",
  },
  {
    titulo: "Desenvolvimento e aprendizagem",
    texto: "Busca compreender dificuldades relacionadas à aprendizagem, ao desenvolvimento ou aos aspectos cognitivos?",
  },
  {
    titulo: "Autismo e desenvolvimento infantil",
    texto: "Procura orientação e acompanhamento especializado para questões relacionadas ao TEA e ao desenvolvimento?",
  },
  {
    titulo: "Acompanhamento familiar",
    texto: "Deseja compreender melhor as necessidades de um familiar e encontrar caminhos para oferecer apoio?",
  },
  {
    titulo: "Momentos de mudança",
    texto: "Está passando por uma fase de transição, desafios pessoais ou decisões importantes e sente necessidade de apoio?",
  },
  {
    titulo: "Autoestima e confiança",
    texto: "Tem dificuldade em reconhecer seu próprio valor, confiar em si mesmo ou lidar com inseguranças?",
},
];

function ForWho() {
  return (
    <section className="para-quem" id="atendimento">
      <h2>Como posso ajudar?</h2>

      <p className="para-quem-intro">
        Cada pessoa possui uma história, necessidades e desafios únicos.
        O acompanhamento psicológico é um espaço de acolhimento,
        escuta e compreensão, respeitando a individualidade e o momento
        de cada pessoa.
      </p>

      <div className="para-quem-grid">
        {dores.map((item) => (
          <article className="card-dor" key={item.titulo}>
            <h3>{item.titulo}</h3>
            <p>{item.texto}</p>
          </article>
        ))}
      </div>
    </section>
  );
}


export default ForWho;