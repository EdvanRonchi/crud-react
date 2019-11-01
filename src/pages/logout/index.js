import { useHistory } from "react-router-dom";
import React from "react";

export default function Logout(){
    const history = useHistory()
    
    localStorage.removeItem('token')
    history.push("/")

    return (
        <>
        </>
    )
}