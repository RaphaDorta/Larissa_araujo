import './style.css';

const perguntas = [
  {
    pergunta: "O atendimento online é seguro?",
    resposta:
      "Sim. O atendimento online segue as mesmas normas éticas do presencial, incluindo o sigilo profissional. As sessões são feitas por [nome da plataforma], em um ambiente privado, e peço que você também escolha um local reservado e com boa conexão.",
  },
  {
    pergunta: "Você emite recibo para reembolso do plano de saúde?",
    resposta:
      "[Sim, emito recibo de cada sessão, que pode ser enviado para solicitar reembolso ao seu plano, conforme as regras dele.] [Ou ajustar: informar se atende por reembolso ou não.]",
  },
  {
    pergunta: "Qual o tempo de duração das sessões?",
    resposta:
      "Cada sessão tem duração de 50 minutos, com frequência semanal, para que possamos trabalhar com continuidade.",
  },
  {
    pergunta: "Como funciona a política de cancelamento?",
    resposta:
      "[Informar o prazo, por exemplo: desmarcações podem ser feitas com até 24 horas de antecedência, sem cobrança. Para faltas sem aviso, a sessão é [cobrada / reagendada].]",
  },
];

function Faq() {
  return (
    <section className="faq" id="faq">
      <h2>Perguntas frequentes</h2>
      <p className="faq-intro">
        Ficou com alguma dúvida? Veja as respostas mais comuns ou me chame no
        WhatsApp.
      </p>

      <div className="faq-lista">
        {perguntas.map((item) => (
          <details className="faq-item" key={item.pergunta}>
            <summary>{item.pergunta}</summary>
            <p>{item.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default Faq;