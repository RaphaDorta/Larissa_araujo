import './style.css';

function About() {
  return (
    <section className="sobre" id="sobre">
      <img
        className="sobre-foto"
        src={`${import.meta.env.BASE_URL}img/larissa_retrato.jpg`}
        alt="Larissa Araujo, psicóloga"
      />

     <div className="sobre-texto">
        <span className="sobre-etiqueta">Sobre mim</span>
        <h2>Larissa Araujo</h2>
        <p className="sobre-crp">Psicóloga · CRP 06/122782</p>

        <p>
          Sou psicóloga e assistente social, com uma trajetória profissional
          dedicada ao cuidado, à saúde emocional e ao desenvolvimento humano.
          Atuo na Psicologia Clínica desde 2016, oferecendo um espaço de escuta,
          acolhimento e respeito à individualidade de cada pessoa. Acredito que
          cada história é única e que o processo terapêutico deve respeitar o
          tempo, as necessidades e as experiências de cada indivíduo.
        </p>

        <h3>Como eu trabalho</h3>
        <p>
          Minha atuação é pautada na escuta qualificada, no acolhimento e na
          compreensão integral de cada pessoa. Minha experiência profissional
          também envolve o acompanhamento de famílias, intervenções psicológicas,
          projetos sociais e desenvolvimento de ações voltadas ao bem-estar
          individual e coletivo.
        </p>

        <p>
          Ao longo da minha trajetória, busquei aprofundar meus conhecimentos
          em Neuropsicologia, Psicopedagogia Clínica e Institucional e
          Intervenção ABA aplicada ao Transtorno do Espectro Autista (TEA),
          ampliando minha compreensão sobre os processos cognitivos,
          comportamentais, emocionais e de aprendizagem.
        </p>

        <ul className="sobre-lista">
          <li>Graduação em Psicologia – Universidade Metodista de Piracicaba</li>
          <li>Graduação em Serviço Social – Faculdades Integradas Maria Imaculada</li>
          <li>MBA em Gestão de Pessoas – Faculdade de Tecnologia de Piracicaba</li>
          <li>Pós-graduação em Neuropsicologia com ênfase em Avaliações</li>
          <li>Pós-graduação em Psicopedagogia Clínica e Institucional</li>
          <li>Pós-graduação em Intervenção ABA aplicada ao TEA</li>
          <li>Atendimento online e seguro</li>
        </ul>
      </div>
    </section>
  );
}

export default About;