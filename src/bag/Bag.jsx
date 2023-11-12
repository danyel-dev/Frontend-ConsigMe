import Header from '../Components/Header'
import Footer from '../Components/Footer'

import './bag.css'

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
        
        axios.get(url, config).then(response => console.log(response.data[0].product.name))
    }, [])

    return(
        <>
            <Header color={"rgb(63, 43, 83)"} />
            
            <div className='bag'>
                              
            </div>

            <Footer />            
        </>
    );
}
