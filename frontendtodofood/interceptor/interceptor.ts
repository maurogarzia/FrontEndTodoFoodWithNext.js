import axios from "axios";
import { useRouter } from "next/router";


const router = useRouter()

// Creo la instancia
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
})


// Agregar token
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    }, 
    (error) => {
        return Promise.reject(error)
    }
)

// Desloguea si hay un error 401
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response.status === 401){
            localStorage.removeItem('token')
            router.push('/')
        }
        return Promise.reject(error)
    }
)