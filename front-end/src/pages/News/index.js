import React, { useEffect, useState } from 'react';
import { FiUser, FiClock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './styles.css';

import api from '../../services/api';

export default function News(){
    
    const [ news, setNews ] = useState([]);
    const conteudo = [];

    useEffect(() => {
        async function getNews(){
            const response = await api.get('/news');

            setNews(response.data);
        }

        getNews();
    }, [])

        news.map(nNew => 
            conteudo.push(
                <Link key={nNew.id} className="news" to={{  pathname: "/news_detail", search: "?id="+nNew.id, params: {id: nNew.id}}}>
                    <h3>{nNew.title}</h3>
                    <p>{nNew.resume}</p>
                    <div className="authorDiv">
                        <FiUser className="authorIcon" /><span className="authorName">{nNew.author}</span>
                        <FiClock className="clockIcon" /><span className="clockValue">{moment(new Date(nNew.created_at)).format("DD-MM-YYYY hh:mm")}</span>
                    </div>
                </Link>     
            )
        )
            
        return(
            <main>
                <div className="conteudoNews">
                    {conteudo}
                </div>
            </main>
        )
}