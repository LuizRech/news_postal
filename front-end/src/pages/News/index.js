import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

export default function News(){
    
    const conteudo = [];

    for(var i=0; i < 6; i++){
        conteudo.push(
            <Link className="news" to={{  pathname: "/news_detail", search: "?id="+i, params: {id: i}}}>
                    <h3>Encontrada a cura do coronavirus </h3>
                    <p>Médicos brasileiros finalmente encontraram a cura do coronavirus</p>
            </Link>     
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