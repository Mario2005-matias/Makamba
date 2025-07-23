import "./styles/services.css";

export default function Services() {
  return (
    <div className="services_content">

      <div className="header_infos">
        <h1>Nossos Serviços</h1>
        <span>Conheça as soluções que oferecemos para impulsionar seu negócio.</span>
      </div>

      <div className="services">

        <div className="card ative">
          <div className="icon">
            <i className="ri-presentation-line"></i>
          </div>
          <h2>Consultoria Estratégica</h2>
          <p>Oferecemos consultoria especializada para ajudar sua empresa a alcançar seus objetivos de negócios.</p>
          <a href="#">Saber Mais</a>
          <div className="button-float-card">
            <div className="button_float">
              <i className="ri-arrow-right-up-line"></i>
            </div>
          </div>

        </div>
        <div className="card">
          <div className="icon">
            <i className="ri-computer-line"></i>
          </div>
          <h2>Desenvolvimento de Software</h2>
          <p>Desenvolvemos soluções personalizadas de software para atender às necessidades específicas do seu negócio.</p>
          <a href="#">Saber Mais</a>
          <div className="button-float-card">
            <div className="button_float">
              <i className="ri-arrow-right-up-line"></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="ri-megaphone-line"></i>
          </div>
          <h2>Marketing Digital</h2>
          <p>Nossas estratégias de marketing digital ajudam a aumentar sua visibilidade online e atrair mais clientes.</p>
          <a href="#">Saber Mais</a>
          <div className="button-float-card">
            <div className="button_float">
              <i className="ri-arrow-right-up-line"></i>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <i className="ri-phone-line"></i>
          </div>
          <h2>Suporte Técnico</h2>
          <p>Oferecemos suporte técnico confiável para garantir que seus sistemas funcionem sem problemas.</p>
          <a href="#">Saber Mais</a>
          <div className="button-float-card">
            <div className="button_float">
              <i className="ri-arrow-right-up-line"></i>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
