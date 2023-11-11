import './listProducts.css';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Product from './Product';

import { useState } from 'react';
import axios from 'axios';


export default function ListProducts() {
    const [products, setProducts] = useState([])
    
    const url = "http://127.0.0.1:8000/products/"
    
    const config = {
        heades: {
            "Content-Type": "application/json"
        }
    }

    axios.get(url, config).then(response => setProducts(response.data))
    
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
