import React from 'react';

export default function NewsDetail(props){
    const idKey = props.location.params.id;

    return(
        <main>
           Noticia  {idKey}
        </main>
    )
}