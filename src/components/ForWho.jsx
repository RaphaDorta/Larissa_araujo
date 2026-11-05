import './style.css';

const dores = [
    {
        titulo: "Cansaço mental",
        texto: "Sente a mente sempre sobrecarregada, sem conseguir desacelerar?",
    },
    {
        titulo: "Limites nos relacionamentos",
        texto: "Tem dificuldade de dizer “não” ou de se posicionar com as pessoas?",
    },
    {
        titulo: "Estresse constante",
        texto: "Vive em um ritmo de tensão que parece não ter pausa?",
    },
    {
        titulo: "Ansiedade e pensamentos acelerados",
        texto: "Os pensamentos não param e dificultam seu descanso e sua rotina?",
    },
    {
        titulo: "Momentos de transição",
        texto: "Está passando por mudanças ou decisões difíceis e quer um apoio?",
    },
    {
        titulo: "Autoconhecimento",
        texto: "Quer se entender melhor e cuidar de você, mesmo sem uma crise?",
    },
];

function ForWho() {
    return (
        <section className="para-quem" id="atendimento">
        <h2>Para quem é o atendimento?</h2>
        <p className="para-quem-intro">
            Se você se identifica com algum destes momentos, a terapia pode ser um
            espaço de cuidado para você.
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