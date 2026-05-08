import './Home.css'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Cards'
import logo_azul  from '../imagenes/Logo_azul.svg'
import arcanaImg from '../imagenes/arcana.svg'
import { FiShield, FiClock, FiUsers, FiSmartphone, FiMapPin, FiSettings } from 'react-icons/fi'
import cardsData from '../components/Cards.json'

const iconMap = {
  FiShield,
  FiClock,
  FiUsers,
  FiSmartphone,
  FiMapPin,
  FiSettings
}

const CardWithMotion = ({ card, delay = 0 }) => {
  const IconComponent = iconMap[card.icon]
  const animConfig = cardsData.animation

  return (
    <motion.div
      style={{ height: '100%' }}
      whileHover={animConfig.whileHover}
      whileInView={animConfig.whileInView}
      initial={animConfig.initial}
      transition={{ ...animConfig.transition, delay }}
      viewport={animConfig.viewport}
    >
      <Card
        title={<><IconComponent /> {card.title}</>}
        description={card.description}
        modifier={card.modifier}
      />
    </motion.div>
  )
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Arcana",
  "description": "Plataforma de control de acceso inteligente para comunidades residenciales cerradas",
  "applicationCategory": "SecurityApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "COP"
  },
  "author": {
    "@type": "Organization",
    "name": "Arcana"
  }
}

function Home() {
  const navigate = useNavigate()
  return (
    <div className="page home">
      <Helmet>
        <title>Arcana — Control de acceso inteligente para comunidades</title>
        <meta name="description" content="Plataforma de control de acceso inteligente para comunidades residenciales cerradas con reconocimiento facial y de placas vehiculares." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* SECCIÓN HERO */}
      <section className="container home__hero">
        <div className="home__hero-content">
          <img src={logo_azul} alt="Logo Arcana" className="home__logo" loading="eager" fetchpriority="high" />

          <img src={arcanaImg} alt="Arcana" className="home__arcana-title" loading="eager" />
          <h2>TU COMUNIDAD RESGUARDADA</h2>
          <p>
            La plataforma de control inteligente para comunidades, apoyada en reconocimiento
            facial, reconocimiento de placas vehiculares y automatizaciones.
          </p>

          <motion.button
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
            tabIndex={2}
          >
            Solicitar demo
          </motion.button>

        </div>
      </section>

      {/* SECCIÓN DE MÉTODOS TRADICIONALES */}
      <section className="container home__methods">
        <h2>¿Tu parcelación aún depende de métodos tradicionales?</h2>
        <p>La mayoría de administradores de propiedad aún utilizan sistemas obsoletos y poco confiables.</p>

        <div className="home__methods-cards">
          {cardsData.methods.map((card, index) => (
            <CardWithMotion key={card.id} card={card} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* SECCIÓN CONTROL DE ACCESO */}
      <section className="container home__control">
        <div className="home__control-header">
          <h2>Control de acceso</h2>
          <span className="home__control-highlight">Inteligente y seguro</span>
          <p> Arcana digitiliza y simplifica todo el proceso de gestión de visitantes.</p>
        </div>

        <div className="home__control-list">
          {cardsData.control.map((card, index) => (
            <CardWithMotion key={card.id} card={card} delay={index * 0.1} />
          ))}
        </div>
      </section>

      {/* SECCIÓN PLATAFORMA COMPLETA */}
      <section className="container home__complete">
        <h2>Todo lo que necesitas en <span className="highlight">una sola plataforma</span></h2>

        <div className="home__complete-cards">
          {cardsData.complete.map((card, index) => (
            <CardWithMotion key={card.id} card={card} delay={index * 0.1} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
