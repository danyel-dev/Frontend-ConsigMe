import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Product from './Product';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './bagProducts.css'


export default function Bag() {
    const [bagProducts, setBagProducts] = useState([])
    const [idBag, setIdBag] = useState()
    
    useEffect(() => {
        const url = "http://127.0.0.1:8000/bag/"
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }
        
        axios.get(url, config).then(response => {
            setBagProducts(response.data[0].products)
            setIdBag(response.data[0].id)
        })
    }, [])

    return(
        <>
            <Header color={"rgb(63, 43, 83)"} />
            
            <main className='bag'>
                {/* <p>Quantidade de Items: {bagProducts.length}</p> */}
            
                {bagProducts.map(product => 
                    <Product key={uuidv4()} productURL={product} idBag={idBag} />  
                )}
            </main>

            <Footer />            
        </>
    );
}
