import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function StoreDetail() {
    const { id } = useParams()

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "Application/json"
            }
        }

        axios.get(`http://127.0.0.1:8000/lojistaDetail/${id}`, config).then(response => console.log(response.data)).catch(response => console.log(response))
    }, [])

    return(
        <p>oi</p>
    ); 
}
