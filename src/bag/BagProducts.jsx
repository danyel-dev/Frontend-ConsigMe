import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Product from './Product';

import './bagProducts.css'

import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Bag() {
    const [bagProducts, setBagProducts] = useState([])

    useEffect(() => {
        const url = "http://127.0.0.1:8000/bag/"
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }
        
        axios.get(url, config).then(response => setBagProducts(response.data[0].products))
    }, [])

    return(
        <>
            <Header color={"rgb(63, 43, 83)"} />
            
            <main className='BagProducts'>
                <p>Quantidade de Items: {bagProducts.length}</p>

                {bagProducts.map(product => 
                    <Product key={product.id} product={product} />  
                )}
            </main>

            <Footer />            
        </>
    );
}
