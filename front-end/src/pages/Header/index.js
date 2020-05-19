import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import crowley from '../../assets/crowley.png';

export default function Header(){
    return(
        <header>

        <div className="headerContainer">
            <img src={crowley} alt="Jornal"/>

            <section className="headerList">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/news">NOTÍCIAS</Link></li>
                    <li><Link to="add_news/">CADASTRAR&nbsp;&nbsp;NOTICIA</Link></li>
                    <li><Link to="/">CONTATO</Link></li>
                </ul>
            </section>

            {/* <section>

<div id="divBusca">
<input type="text" id="txtBusca" placeholder="Buscar..."/>
<button id="btnBusca">Buscar</button>
</div>

</section> */}
        </div>
</header>
    )
}