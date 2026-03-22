import { useContext, useState } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import '../styles/Css/Contacto.css'; 

function Contacto() {
   
    const { darkMode } = useContext(DarkModeContext);

    

    return (
        <section className='fondos'>

        
            <section className={`contact-form ${darkMode ? 'dark' : ''}`}>
                <article className="contact-header">
                    <h1>Contacta con nosotros!</h1>
                    <p>Si tienes alguna duda o consulta, no dudes en ponerte en contacto con nosotros, estaremos encantados de ayudarte:</p>
                    <h2><strong>Teléfono:</strong> +34 660 59 31 54</h2>
                    <h2><strong>Email:</strong> info@ladivatattoo.com</h2>

                </article>

            
            </section>
        </section>
    );
}

export default Contacto;
