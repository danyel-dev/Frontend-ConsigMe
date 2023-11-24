import axios from 'axios';
import './product.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


export default function Product({product}) {
    const [user, setUser] = useState();

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            },
        }
        
        axios.get("http://127.0.0.1:8000/userLogado/", config).then(
            response => setUser(response.data[0])
        )
    }, [])

    function handleAdditionProduct() {
        const url = "http://127.0.0.1:8000/bag/"
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            },
        }
        
        const body = {user: user.url, product: product.url}

        axios.post(url, body, config)
    }

    return(
        <div className='item'>
            <img className='item-image' src={product.image} alt={product.name} />

            <div className='item-body'>     
                <h3>{product.name}</h3>

                <p className='item-description'>{product.description}</p>
                
                <small className="item-comments-number"><i className="fa-solid fa-comment"></i>4 comentários</small>
 
                <div className='description-cart'>
                    <Link to={`/products/${product.id}`} className='description-cart-button'>Ver produto</Link>

                    <small className='productValue'>R$ {product.value}</small>
                </div>
            </div>
        </div> 
    );
}
