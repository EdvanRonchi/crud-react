import React, { useState } from 'react';
import './style.css'



const Teste1 = () => {
    return(
        <h1>teste1</h1>
    )
}

const Teste2 = () => {
    return(
        <h1>teste2</h1>
    )
}

const teste = (e) => {
    console.log(e)
}


export default function Login() {
    const [ aparecer, setAparecer] = useState(true);
    
    return (
        <div className="container">
            <button onClick={() => setAparecer(true)}>Aparecer 1</button> 
            <button onClick={() => setAparecer(false)}>Aparecer 2</button> 
            {aparecer && <Teste1 />}
            {!aparecer && <Teste2 />}
            <button onClick={() => teste(aparecer)}>Entrar</button> 

        </div>
    )
}


