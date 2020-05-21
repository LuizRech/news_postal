import React, { useEffect, useState } from 'react';
import { FiUser, FiClock } from 'react-icons/fi';
import moment from 'moment';

import api from '../../services/api';

import './styles.css';

export default function NewsDetail(props){
    const idKey = props.location.search.slice(4);

    const [ newsDetail, setNewsDetail ] = useState([]);

    useEffect(() => {
        async function getNewsDetail(){
            const response = await api.get(`/news_detail/${idKey}`);

            setNewsDetail(response.data);
            console.log(response.data)
        }

        getNewsDetail();
    }, [])

    return(
        <main>
          {newsDetail.map(detail =>
            <>
                <h1> {detail.title} </h1>
                <div className="content">
                        {detail.new_content}
                </div>
                <div className="authorDiv">
                        <FiUser className="authorIcon" /><span className="authorName">{detail.author}</span>
                        <FiClock className="clockIcon" /><span className="clockValue">{moment(new Date(detail.created_at)).format("DD-MM-YYYY hh:mm")}</span>
                    </div>
            </>
          )}  
        </main>
    )
}