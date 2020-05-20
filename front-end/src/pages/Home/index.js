import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import api from '../../services/api';

export default function Home(){
    
    const [ newsHome, setNewsHome ] = useState([]);

    const conteudoUD = [];
    const conteudoTQC = [];


    useEffect(() => {
        async function requireNews(){
            const response = await api.get('/');
            setNewsHome(response.data);
        }

        requireNews();
    }, []);

    if(newsHome.length === 5){    
        for(var i=0;i < newsHome.length;i++){
            if(i < 3){
                conteudoUD.push(
                    <Link
                        key={newsHome[i].id} 
                        className="linkConteudo" 
                        to={{
                            pathname: "/news_detail",
                            search: "?id="+newsHome[i].id, 
                            params: {
                                id: newsHome[i].id
                            }
                        }}
                    >
                        <div className="conteudo">
                            <h3>Titulo:{i} </h3>
                            <p>{newsHome[i].title}</p>
                            <h3>Resumo: </h3>
                            <p>{newsHome[i].resume}</p>
                        </div>
                </Link>
            )
        }else{
            conteudoTQC.push(
                <Link
                    key={newsHome[i].id} 
                    className="linkConteudo" 
                    to={{  
                        pathname: "/news_detail", 
                        search: "?id="+newsHome[i].id+"", 
                        params: {
                            id: newsHome[i].id
                        }
                    }}
                >
                    <div className="conteudo">
                        <h3>Titulo:{i} </h3>
                        <p>{newsHome[i].title}</p>
                        <h3>Resumo: </h3>
                        <p>{newsHome[i].resume}</p>
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
}else{
    return <div>Sem conteudo</div>
}
}