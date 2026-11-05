import './style.css';

function About() {
  return (
    <section className="sobre" id="sobre">
      <img
        className="sobre-foto"
        src="public/img/absolutvision-smiley-2979107.jpg"
        alt="Larissa Araujo, psicóloga"
      />

      <div className="sobre-texto">
        <span className="sobre-etiqueta">Sobre mim</span>
        <h2>Larissa Araujo</h2>
        <p className="sobre-crp">Psicóloga · CRP 00/00000</p>

        <p>
          Sou psicóloga e acredito que cuidar da saúde emocional é um processo
          que se faz com escuta, respeito e no tempo de cada pessoa. [Conte aqui,
          em 2 ou 3 frases, sua trajetória e o que te motiva a trabalhar com
          psicologia.]
        </p>

        <h3>Como eu trabalho</h3>
        <p>
          Minha atuação é baseada em [abordagem]. Na prática, isso significa
          [explicar em palavras simples o que o paciente vivencia nas sessões,
          por exemplo: como são os encontros, no que o trabalho foca, o que
          muda no dia a dia].
        </p>

        <ul className="sobre-lista">
          <li>[Formação, ex.: Graduação em Psicologia – Instituição]</li>
          <li>[Especialização ou curso relevante]</li>
          <li>Atendimento online e seguro</li>
        </ul>
      </div>
    </section>
  );
}

export default About;