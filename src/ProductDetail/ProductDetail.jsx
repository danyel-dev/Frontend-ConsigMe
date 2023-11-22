import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';


export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/products/${id}/`).then(response => setProduct(response.data))
    }, [id]) 

    
    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />
            
            <main>
                <div className="product">
                    <img src={product.image} alt={product.name} />
                    <h3>product.name</h3>
                    <p>{product.description}</p>
                    <p>{product.size}</p>
                </div>

                <div className="comments">
                    <p>{product.comment_set[0].message}</p>
                </div>
            </main>

            <Footer></Footer>
        </> 
    );
}
