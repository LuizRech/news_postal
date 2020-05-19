import React from 'react';

import './styles.css';

export default function News(){
    
    const conteudo = [];

    for(var i=0; i < 6; i++){
        conteudo.push(
            <div className="news">
                <h3>Encontrada a cura do coronavirus </h3>
                <p>Médicos brasileiros finalmente encontraram a cura do coronavirus</p>
            </div>
        )
    }
    
    return(
        <main>
            <div className="conteudoNews">
                {conteudo}
            </div>
        </main>
    )
}