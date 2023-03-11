import React from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponent from '../pure/contacto';

const ContactoList = () => {
    const defaultContacto = new Contacto('Jeysson', 'Seclen Meoño', 'jseclenmeono@gmail.com', false)
    return (
        <div>
            <div>
                Contacto:
            </div>
            <ContactoComponent contacto={defaultContacto}></ContactoComponent>
        </div>
    );
}

export default ContactoList;
