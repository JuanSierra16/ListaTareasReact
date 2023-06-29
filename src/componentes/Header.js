import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = ({mostrarCompletadas, cambiarMostrarCompletadas}) => {
    return ( 
        <header className='header'>
            <h1 className='header__titulo'>Lista de Tareas</h1>
            <button className='header__boton' onClick={() => cambiarMostrarCompletadas(!mostrarCompletadas)}>
                {mostrarCompletadas ? 
                <>
                    No mostrar completadas
                    <FontAwesomeIcon icon={faEyeSlash} className='header__icono-boton' />
                </>
                : 
                <>
                    Mostrar Completadas
                    <FontAwesomeIcon icon={faEye} className='header__icono-boton' />
                </>
                }
            </button>
        </header>
     );
}
 
export default Header;