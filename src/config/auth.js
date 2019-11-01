import api from "../config/service";

export const isAuthenticated = () => {
    const token = localStorage.getItem("token")
    
     async function axios(){
        await api.get("auth/token", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(() => {
            return true
        }).catch(() => {
            return false
        })
    }

    axios()
}