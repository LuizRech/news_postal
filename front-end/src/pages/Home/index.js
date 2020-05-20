import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiClock } from 'react-icons/fi';
import moment from 'moment';

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

        for(var i=0;i < newsHome.length;i++){
            if(i < 3){
                conteudoUD.push(
                    <Link
                        key={newsHome[i].id} 
                        className="news" 
                        to={{
                            pathname: "/news_detail",
                            search: "?id="+newsHome[i].id, 
                            params: {
                                id: newsHome[i].id
                            }
                        }}
                    >
                        <h3>{newsHome[i].title} </h3>
                        <p>{newsHome[i].resume}</p>
                        <div className="authorDiv">
                            <FiUser className="authorIcon" /><span className="authorName">{newsHome[i].author}</span>
                            <FiClock className="clockIcon" /><span className="clockValue">{moment(new Date(newsHome[i].created_at)).format("DD-MM-YYYY hh:mm")}</span>
                        </div>
                </Link>
            )
        }else{
            conteudoTQC.push(
                <Link
                    key={newsHome[i].id} 
                    className="news" 
                    to={{  
                        pathname: "/news_detail", 
                        search: "?id="+newsHome[i].id+"", 
                        params: {
                            id: newsHome[i].id
                        }
                    }}
                >
                    <h3>{newsHome[i].title} </h3>
                    <p>{newsHome[i].resume}</p>
                    <div className="authorDiv">
                        <FiUser className="authorIcon" /><span className="authorName">{newsHome[i].author}</span>
                        <FiClock className="clockIcon" /><span className="clockValue">{moment(new Date(newsHome[i].created_at)).format("DD-MM-YYYY hh:mm")}</span>
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