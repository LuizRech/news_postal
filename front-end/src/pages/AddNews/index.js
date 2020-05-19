import React from 'react';

import './styles.css';

export default function addNews(){
    return(
        <main>
            <div className="formContainer">
                <form action="" method="">
                    <input
                        className="inputStyle"
                        type="text"
                        placeholder="Titulo"
                    />
                    <br />
                    <input 
                        className="inputStyle"
                        type="text" 
                        placeholder="Resumo"
                    />
                    <br />
                    <textarea
                        className="inputStyle"
                        placeholder="Noticia"
                    />    
                    <br />
                    <input
                        className="inputStyle" 
                        type="text" 
                        placeholder="Autor" 
                    />
                    <br />
                    <input 
                        className="formSubmit" 
                        type="submit" 
                        name="submit"
                    />
                </form>
            </div>
        </main>
    )
}