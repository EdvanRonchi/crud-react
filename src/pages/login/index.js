import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { Redirect, Route } from "react-router-dom"

import 'react-toastify/dist/ReactToastify.css';

import api from '../../config/service'
import 'bootstrap/dist/css/bootstrap.css'
import './style.css';

export default function LoginRegister() {
    const [ show, setShow] = useState(true)
    const [ namebtn, setNamebtn] = useState('Login')

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

    const updateLogin = (field, value) => {
        setLogin({ ...login, [field]: value })
    };

    const updateCadastro = (field, value) => {
        setCadastro({ ...cadastro, [field]: value })
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        

        if(show === true){
            async function axios(){
                await api.post('auth/login', {
                    email: login.email+"@react.com",
                    senha: login.senha

                }).then((response) => {
                    localStorage.setItem('token', response.data.token)
                    toast.success('Logado com sucesso')
                    
                    
                    
                }).catch((err) => {
                    var mensagem = (err.response)? err.response.data.error : "Erro ao logar"
                    
                    toast.error(mensagem)
                })
            }
            
            axios()
           
        }else{
            if(cadastro.senha !== cadastro.senha2){
                toast.error("Senhas não coincidem")
                return false
            }

            async function axios(){
                await api.post('auth/register', {
                    nome:  cadastro.nome,
                    email: cadastro.email+"@react.com",
                    senha: cadastro.senha

                }).then((response) => {
                    localStorage.setItem('token', response.data.token)
                    toast.success('Registrado com sucesso')
                    
                }).catch((err) => {
                    var mensagem = (err.response)? err.response.data.error : "Erro ao cadastrar"
                    
                    toast.error(mensagem)
                })
            }

            axios()
        }
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="botao">  
                    <ToastContainer 
                        position="top-center"
                    />
                    <div className="btn-group btn-block mb-2" role="group">
                        <button type="button" className="btn btn-secondary" onClick={() => {setShow(true); setNamebtn('Login')}}>Login</button> 
                        <button type="button" className="btn btn-secondary" onClick={() => {setShow(false); setNamebtn('Cadastrar')}}>Cadastrar</button> 
                    </div>
                </div>
                
                <div className="box">
                    {show && (
                        <div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="E-mail" onChange={ event => updateLogin("email", event.target.value)}/>
                                <div className="input-group-append">
                                    <span className="input-group-text">@react.com</span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Senha" onChange={event => updateLogin("senha", event.target.value)}/>
                            </div>
                        </div>           
                    )}
                    {!show && (
                        <div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Nome" onChange={event => updateCadastro("nome", event.target.value)}/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="E-mail" onChange={event => updateCadastro("email", event.target.value)}/>
                                <div className="input-group-append">
                                    <span className="input-group-text">@react.com</span>
                                </div>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Senha" onChange={event => updateCadastro("senha", event.target.value)}/>
                            </div>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Confirmar Senha" onChange={event => updateCadastro("senha2", event.target.value)}/>
                            </div>
                        </div>
                    )}
                </div>
                <button className="btn btn-outline-dark btn-block" type="submit">{namebtn}</button> 
            </form>
        </div>
    )
}