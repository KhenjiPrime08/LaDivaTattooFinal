import { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';
import '../styles/Css/info.css'
import iconos from '../assets/images/iconos/Iconos'
    
function Info() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <section className='mapa-container'>
  <h1>Dónde encontrarnos</h1>

  <section className='rowline'>

    {/* INFO PANEL */}
    <section className='contact-info'>
      <article className={`art ${darkMode ? 'dark-mode' : ''}`}>

        <h2 className="contact-title">La Diva Tattoo Studio</h2>

        <p className="contact-desc">
          Estudio creativo especializado en tatuaje artístico, diseño personalizado
          y gemas dentales. Nuestro objetivo es transformar ideas en piezas únicas,
          cuidando cada detalle desde el diseño hasta la ejecución final.
        </p>

        {/* BLOQUE INFO PRINCIPAL */}
        <div className="info-block">

          <section className='info-item'>
            <img src={iconos.ubicacion} alt="icono ubicacion" />
            <p>Calle C. Palangre 1, Local - Puerto del Carmen</p>
          </section>

          <section className='info-item'>
            <img src={iconos.movil} alt="icono movil" />
            <p>+34 660 59 31 54</p>
          </section>

          <section className='info-item'>
            <img src={iconos.correo} alt="icono correo" />
            <p>ladivatattoo@gmail.com</p>
          </section>

        </div>

        {/* HORARIOS */}
        <div className="schedule-block">

          <section className='info-item'>
            <img src={iconos.horario} alt="icono horario" />
            <p>
              <strong>Horario de atención</strong><br />
              Lunes, Miércoles, Jueves y Viernes: 10:00 - 22:00<br />
              Martes y Sábados: 10:00 - 13:00<br />
              Domingo: Cerrado
            </p>
          </section>

        </div>

        {/* VALORES */}
        <div className="values-block">

          <h3>Nuestro compromiso</h3>

          <ul>
            <li> Higiene y esterilización certificada</li>
            <li> Diseños exclusivos adaptados a cada cliente</li>
            <li> Materiales profesionales de alta calidad</li>
            <li> Atención cercana, honesta y personalizada</li>
            <li> Ambiente creativo y seguro</li>
          </ul>

        </div>

      </article>
    </section>

    {/* MAPA */}
    <section className='map-container'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3492.2880464341315!2d-13.655655788466813!3d28.919497470888555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4625a28e818ac9%3A0x33ef7b57811c8382!2sLa%20Diva%20tattoo!5e0!3m2!1ses!2ses!4v1739970088323!5m2!1ses!2ses"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>

  </section>
</section>
  )
}

export default Info