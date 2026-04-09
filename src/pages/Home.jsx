import './Home.css'
import ScrollTriggered from '../components/ScrollTriggered'
import { motion } from 'framer-motion'

function Home() {
  return (
    <div className="page home">
      <section className="container home__hero">
        <div className="home__hero-left">
          <h1>Arcana</h1>
          <div className="home__hero-text">
            <h2>Control inteligente para comunidades</h2>
            <p>
              Arcana es una plataforma para la creacion y gestion de comunidades, apoyada en
              reconocimiento facial, reconocimiento de placas vehiculares y automatizaciones.
            </p>
          </div>
        </div>

        <div className="home__hero-cards" aria-label="Acciones principales">
          <motion.article 
            className="card"
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <span className="card__title">Controla</span>
            <p>desde un sólo lugar, quiénes pueden acceder a tu hogar</p>
          </motion.article>
          <motion.article 
            className="card card--tall"
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <span className="card__title">Entérate</span>
            <p>de todas las novedades de tu comunidad</p>
          </motion.article>
          <motion.article 
            className="card"
            whileHover={{ scale: 1.05, y: -8 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <span className="card__title">Accede</span>
            <p>a todas las comodidades de tu comunidad.</p>
          </motion.article>
        </div>
      </section>

      <section id="demo" className="container home__demo">
        <div className="home__video">
          <p>MVP funcional en pruebas con la comunidad de Monte Sereno, en El Retiro, Antioquia.</p>
        </div>
      </section>

      <section className="container">
        <ScrollTriggered />
      </section>
    </div>
  )
}

export default Home