import "./footer.css"

const Footer = () => {
  return (
    <section className="footer">
      <div className="content">
        <div>
          <h1>INSTITUCIONAL</h1>
          <ul className="line-bar-institucional">
            <li>Principal</li>
            <li>Sobre</li>
            <li>Consultoria, Inspeção e Projetos</li>
            <li>Energia</li>
            <li>Instalação, Manutenção e Facilities</li>
            <li>Treinamentos</li>
            <li>Contato</li>
          </ul>
        </div>

        <div>
          <h1>CONTATO</h1>
          <div className="contact line-bar-contato">
            <span>Endereço: R. Tibúrcio Cavalcante, 1958 - B</span>
            <span>Aldeota - Fortaleza - CE</span>
            <span>Telefone: (85) 98788.7078</span>
            <span>E-mail: atendimento@hesq.com.br</span>
            <span>CNPJ: 54.503.236/0001-70</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer