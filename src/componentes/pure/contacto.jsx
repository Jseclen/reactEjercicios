import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ContactoList from '../container/contacto.list';


const ContactoComponent = ({contacto}) => {
    return (
        <div>
            <p>Nombre: {contacto.nombre}</p>
            <p>Apellido: {contacto.apellido}</p>
            <p>Email: {contacto.email}</p>
            <ContactoList estado={true}></ContactoList>
        </div>
    );
};


ContactoComponent.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)
};


export default ContactoComponent;
