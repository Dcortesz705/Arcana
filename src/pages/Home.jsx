import './Home.css'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Cards'
import logo_azul  from '../imagenes/Logo_azul.svg'
import arcanaImg from '../imagenes/arcana.svg'

function Home() {
  const navigate = useNavigate()
  return (
    <div className="page home">
      {/* SECCIÓN HERO */}
      <section className="container home__hero">
        <div className="home__hero-content">
          <img src={logo_azul} alt="Logo" className="home__logo" />
          
          <img src={arcanaImg} alt="Arcana" className="home__arcana-title" />
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
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Seguridad inteligente"
              description="Reconocimiento facial y de placas en tiempo real"
              modifier="feature-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Privadas tarifas"
              description="Control total sobre acceso y permisos de usuarios"
              modifier="feature-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Diseño escalable"
              description="Crece con tu comunidad sin limitaciones"
              modifier="feature-card"
            />
          </motion.div>
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
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Autenticación inteligente"
              description="Identifica a los residentes mediante reconocimiento facial avanzado"
              modifier="control-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Verificación en portería"
              description="Valida acceso de visitantes y proveedores con un toque"
              modifier="control-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Trazabilidad completa"
              description="Registra cada entrada y salida con timestamp y datos biométricos"
              modifier="control-card"
            />
          </motion.div>
        </div>
      </section>

      {/* SECCIÓN PLATAFORMA COMPLETA */}
      <section className="container home__complete">
        <h2>Todo lo que necesitas en <span className="highlight">una sola plataforma</span></h2>

        <div className="home__complete-cards">
          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Seguridad integral"
              description="Protege a tu comunidad con tecnología de punta"
              modifier="complete-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Control remoto"
              description="Gestiona accesos desde cualquier lugar del mundo"
              modifier="complete-card"
            />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: 'spring', bounce: 0.4 }}
          >
            <Card 
              title="Fácil administración"
              description="Interfaz intuitiva para administradores y residentes"
              modifier="complete-card"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home