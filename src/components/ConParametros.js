import React from 'react';

// Se necesita cargar una funcióon de reat-router-dom
import {useParams} from 'react-router-dom';
 
const ConParametros = () => {
    let {id} = useParams();

    return (
        <div>
            <h2>ConParametros</h2>
            <p>id: {id} </p>
        </div>
    )
};

export default ConParametros;