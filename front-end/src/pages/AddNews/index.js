import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';

export default function AddNews(){

    const [ title, setTitle ] = useState('');
    const [ resume, setResume ] = useState('');
    const [ new_content, setNewContent] = useState('');
    const [ author, setAuthor ] = useState('');

    const history = useHistory();

    async function handleSubmit(event){
        event.preventDefault();

        const data = {   
            title,
            resume,
            new_content,
            author
        }

        const response = await api.post('/create_news', data);
        alert(response.data.message)

        history.push('/');
    }
    
    return(
        <main>
            <div className="formContainer">
                <form onSubmit={handleSubmit} method="post">
                    <input
                        className="inputStyle"
                        type="text"
                        name="title"
                        placeholder="Titulo"
                        required
                        onChange={e => setTitle(e.target.value)}
                    />
                    <br />
                    <input 
                        className="inputStyle"
                        type="text" 
                        name="resume"
                        placeholder="Resumo"
                        required
                        onChange={e => setResume(e.target.value)}
                    />
                    <br />
                    <textarea
                        className="inputStyle"
                        name="new_content"
                        placeholder="Noticia"
                        required
                        onChange={e => setNewContent(e.target.value)}
                    />    
                    <br />
                    <input
                        className="inputStyle" 
                        type="text" 
                        name="author"
                        placeholder="Autor"
                        required
                        onChange={e => setAuthor(e.target.value)}
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