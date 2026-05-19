# Arcana

Landing page enfocada en ventas, dirigida a administraciones y personas influyentes en la toma de decisiones de parcelaciones y unidades cerradas en Antioquia.

- **Problema que resuelve:** 
La mayoría de parcelaciones y conjuntos cerrados en Antioquia dependen de métodos obsoletos para gestionar el acceso de visitantes y residentes (listas en papel, llamadas manuales, porteros sin herramientas digitales). Arcana presenta una solución moderna a ese problema.
- **Para quién está pensado:** 
Administradores de propiedad horizontal, juntas directivas y cualquier persona con poder de decisión en comunidades residenciales cerradas de Antioquia.
- **Qué hace:** 
Presenta las funcionalidades de la plataforma Arcana (control de acceso con reconocimiento facial y de placas vehiculares), muestra casos de éxito de la comunidad y permite a los interesados solicitar una demo personalizada.

## Tabla de contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Ejecución](#ejecución)
- [Scripts disponibles](#scripts-disponibles)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Variables de entorno](#variables-de-entorno)
- [Despliegue](#despliegue)
- [Contribución](#contribución)
- [Roadmap](#roadmap)
- [Autores](#autores)
- [Licencia](#licencia)

## Características

- Página de inicio con sección hero, métodos tradicionales, control de acceso y plataforma completa.
- Página de comunidad con estadísticas, historias de éxito y casos de éxito documentados.
- Formulario de contacto con carga dinámica de departamentos y municipios de Colombia vía API externa.
- Navegación entre páginas con React Router sin recargar el sitio.
- Animaciones de entrada y hover con Framer Motion.
- SEO básico configurado: meta tags por ruta, Open Graph, datos estructurados JSON-LD y sitemap.
- Desplegado en Firebase Hosting con soporte para enrutamiento client-side.

## Tecnologías

- **Frontend:** React 19, React Router DOM v7
- **Build tool:** Vite 8
- **Estilos:** CSS modular por página + hoja global de variables
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form
- **Íconos:** React Icons (Feather Icons), LineIcons
- **SEO:** react-helmet-async
- **Hosting:** Firebase Hosting
- **API externa:** [api-colombia.com](https://api-colombia.com) — departamentos y municipios

## Requisitos previos

- Node.js v18 o superior (recomendado)
- npm v9 o superior
- Cuenta en Firebase (solo si vas a hacer deploy)

Para verificar tu versión actual:

```bash
node -v
npm -v
```

## Instalación

```bash
# 1) Clonar el repositorio
git clone https://github.com/Dcortesz705/Arcana.git

# 2) Entrar al proyecto
cd Arcana

# 3) Instalar dependencias
npm install
```

## Ejecución

```bash
npm run dev
```

El sitio queda disponible en `http://localhost:5173`.

## Scripts disponibles

- `npm run dev` — levanta el entorno de desarrollo con hot reload.
- `npm run build` — genera la versión de producción en la carpeta `dist/`.
- `npm run preview` — previsualiza el build de producción de forma local antes de subir.
- `npm run lint` — ejecuta ESLint para validar el código.

## Estructura del proyecto

```text
.
├── public                  # Recursos estáticos públicos (favicon, robots.txt, sitemap.xml)
├── src
│   ├── components          # Componentes reutilizables (Cards, Navbar, Footer)
│   ├── imagenes            # Assets SVG del proyecto (logo, ilustraciones)
│   ├── pages               # Páginas de la aplicación
│   │   ├── Home.jsx        # Página principal
│   │   ├── Home.css
│   │   ├── Community.jsx   # Página de comunidad y casos de éxito
│   │   ├── Community.css
│   │   ├── Contact.jsx     # Formulario de solicitud de demo
│   │   └── Contact.css
│   ├── styles
│   │   └── global.css      # Variables de diseño, reset y estilos base
│   ├── App.jsx             # Definición de rutas
│   ├── main.jsx            # Punto de entrada de React
│   └── index.css           # Estilos raíz mínimos
├── firebase.json           # Configuración de Firebase Hosting
├── package.json            # Dependencias y scripts
└── README.md               # Documentación del proyecto
```

## Variables de entorno

Este proyecto actualmente no usa variables de entorno. Si en el futuro se integra un backend o servicio externo con credenciales, se documentarán aquí y se creará un archivo `.env.example` como referencia.

## Despliegue

El proyecto está desplegado en Firebase Hosting:

🔗 **URL de producción:** https://arcana-landing-86cc9.web.app

Para generar un nuevo deploy:

```bash
# 1) Asegurarse de tener Firebase CLI instalado
npm install -g firebase-tools

# 2) Iniciar sesión en Firebase (solo la primera vez)
firebase login

# 3) Generar el build de producción
npm run build

# 4) Subir a Firebase
firebase deploy
```

> **Nota:** el archivo `firebase.json` ya está configurado con el rewrite necesario para que React Router funcione correctamente en producción. No es necesario modificarlo.

## Contribución

1. Crear una rama desde `main` con un nombre descriptivo (ej. `feature/formulario-backend`).
2. Hacer los cambios y commits con mensajes claros en español.
3. Abrir un Pull Request describiendo qué se cambió y por qué.
4. Esperar revisión antes de hacer merge.

## Roadmap

- [ ] Conectar el formulario de contacto a un backend o servicio de email para que los datos lleguen al equipo y se pueda agendar la demo con el cliente.

## Autores

- Alejandra Palacios Anaya — [Arquitectura y creación de componentes]
- Antonia Londoño Soto — [Arquitecturay y enrutamiento ]
- Manuela Hoyos Jiménez — [Estilos - CSS]
- Nicolás Ramírez Acosta — [SEO y Deploy ]
- Daniela Cortés Zapata — [APIs y Optimización del código]

## Licencia

Este proyecto es privado. Todos los derechos reservados.