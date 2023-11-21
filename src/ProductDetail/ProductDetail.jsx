import axios from "axios";
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
    const { id } = useParams()
    
    axios.get(`http://127.0.0.1:8000/products/${id}/`).then(response => console.log(response.data))
    
    return (
        <>
            <p>oi</p>
        </>
    );
}
