import React, { useState } from 'react';
import api from '../../config/service'

export default function Login(props) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    function handleSubmit(e){
        e.preventDefault()
        
        async function axios(){
            await api.post('auth/login', {
                email,
                senha
            }).then((response) => {
                localStorage.setItem('token', response.data.token)
                console.log(response.data.token);
                
                
            }).catch((err) => {
                console.log("Deu ruim")
            })
        }
        
        axios()
    }

    return (
        <div className="container">
            <h1>{props.title}</h1>

            <form onSubmit={handleSubmit}>
                Email: <input type="text" onChange={ e => setEmail(e.target.value)} />
                Senha: <input type="password" onChange={ e => setSenha(e.target.value)} />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

