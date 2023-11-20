import './listProducts.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Product from './Product';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function ListProducts() {
    const [products, setProducts] = useState([])
    const { id } = useParams()
    
    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }  
        }
    
        axios.get(`http://127.0.0.1:8000/sacoleiras/${id}/products`, config).then(
            Response => console.log(Response.data)
        )
    }, [id])
    
    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />

            <div className='products'>
                <form className='formSearchProduct'>
                    <input type="text" placeholder='Pesquise por um produto aqui' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
                
                <select name="" id="category-products">
                    <option value="">Camisetas</option>
                    <option value="">Calças</option>
                    <option value="">Sapatos</option>
                    <option value="">Roupa intima</option>
                </select>
                
                <div className='container'>
                    {products.map(product => <Product key={product.id} product={product} />)}
                </div>
            </div>

            <Footer />
        </>
    );
}
