import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

export default function Home(){
    
    const conteudoUD = [];
    const conteudoTQC = [];

    // Quando receber dados, verificar se dado.length > 0 pra começar o loop
    for(var i=1;i < 6;i++){
        if(i < 3){
            conteudoUD.push(
                <Link className="linkConteudo" to={{  pathname: "/news_detail", search: "?id="+i, params: {id: i}}}>
                    <div className="conteudo">
                        <h3>Titulo:{i} </h3>
                        <p>Encontrada a cura do coronavirus</p>
                        <h3>Resumo: </h3>
                        <p>Médicos brasileiros finalmente encontraram a cura do coronavirus</p>
                    </div>
                </Link>
            )
        }else{
            conteudoTQC.push(
                <Link className="linkConteudo" to={{  pathname: "/news_detail", search: "?id="+i+"", params: {id: i}}}>
                    <div className="conteudo">
                        <h3>Titulo:{i} </h3>
                        <p>Encontrada a cura do coronavirus</p>
                        <h3>Resumo: </h3>
                        <p>Médicos brasileiros finalmente encontraram a cura do coronavirus</p>
                    </div>
                </Link>    
            )
        }
    }

    return(

        <main>
            
            <div className="conteudoUD">
                {conteudoUD}
            </div>
            
            <div className="conteudoTQC">
                {conteudoTQC}
            </div>

        </main>
    )
}