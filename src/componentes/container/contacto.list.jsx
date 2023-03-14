import React, { useState } from 'react';
import PropTypes from 'prop-types';


const ContactoList = (estado) => {
    const [conectado, setconectado] = useState(estado);
    return (
        <div>
            <button onClick={() => setconectado(!conectado)}> Estado: {conectado ? ' Contacto En Línea' : 'Contacto No Disponible'}</button>
        </div>
    );
};


ContactoList.propTypes = {
    estado: PropTypes.bool,
};


export default ContactoList;
