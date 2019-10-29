import React, { useState } from 'react';
import api from '../../config/service'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

export default function LoginRegister() {
    const [ show, setShow] = useState(true);
    const [ namebtn, setNamebtn] = useState('Login');
    const [ login, setLogin] = useState({
        email: '',
        senha: ''
    })
    const [ cadastro, setCadastro] = useState({
        nome: '',
        email: '',
        senha: '',
        senha2: ''
    })
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
        if(show === true){
            console.log(login.email)
            console.log(login.senha)
            
            /* async function axios(){
                await api.post('auth/login', {
                    
                }).then((response) => {
                    localStorage.setItem('token', response.data.token)
                    
                    
                }).catch((err) => {
                    console.log("Deu ruim")
                })
            } */
    
           
        }else{
            console.log(cadastro.nome, cadastro.email, cadastro.senha, cadastro.senha2)


            /* async function axios(){
                await api.post('auth/register', {
                    
                }).then((response) => {
                    localStorage.setItem('token', response.data.token)
                    console.log(response.data.token);
                    
                    
                }).catch((err) => {
                    console.log("Deu ruim")
                })
            } */
        }
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="botao">  
                    <div className="btn-group btn-block mb-2" role="group">
                        <button type="button" className="btn btn-secondary" onClick={() => {setShow(true); setNamebtn('Login')}}>Login</button> 
                        <button type="button" className="btn btn-secondary" onClick={() => {setShow(false); setNamebtn('Cadastrar')}}>Cadastrar</button> 
                    </div>
                </div>
                <div className="box">
                    {show && (
                        <div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="E-mail" onChange={(e) => setLogin({email: e.target.value})}/>
                                <div className="input-group-append">
                                    <span className="input-group-text">@react.com</span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Senha" onChange={(e) => setLogin({senha: e.target.value})}/>
                            </div>
                        </div>           
                    )}
                    {!show && (
                        <div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome" onChange={(e) => setCadastro({nome: e.target.value})}/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="E-mail" onChange={(e) => setCadastro({email: e.target.value})}/>
                                <div className="input-group-append">
                                    <span className="input-group-text">@react.com</span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Senha" onChange={(e) => setCadastro({senha: e.target.value})}/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Confirmar Senha" onChange={(e) => setCadastro({senha2: e.target.value})}/>
                            </div>
                        </div>
                    )}
                </div>
                <button className="btn btn-outline-dark btn-block" type="submit">{namebtn}</button> 
            </form>
        </div>
    )
}


