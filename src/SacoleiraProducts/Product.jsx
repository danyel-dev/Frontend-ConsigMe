import { useEffect, useState } from 'react';
import './product.css'
import { Link } from 'react-router-dom';


export default function Product({ product, sacoleiraId }) {
    const [note, setNote] = useState("")

    useEffect(() => {
        if(product.productnote_set.length > 0) {
            const notes = product.productnote_set.map(item => item.note)
            const soma = notes.reduce((acumulador, atual) => acumulador + atual, 0)
            setNote(soma/product.productnote_set.length)
        }
    }, [])

    return(
        <div className='item'>
            <a href={`/sacoleiras/${sacoleiraId}/products/${product.id}`}>
                <img className='item-image' src={product.image} alt={product.name} />
                {note}
            </a>

            <div className='item-body'>     
                <a href={`/sacoleiras/${sacoleiraId}/products/${product.id}`}>
                    <h3>{product.name}</h3>
                </a>

                <p className='item-description'>{product.description.slice(0, 100)}...</p>
                
                <a className='item-comments-number' href={`http://localhost:3000/sacoleiras/${sacoleiraId}/products/${product.id}#disqus_thread`}><i className="fa-solid fa-comment"></i> Ver comentários</a>

                <div className='description-cart'>
                    <Link to={`/sacoleiras/${sacoleiraId}/products/${product.id}`} className='description-cart-button'>Acessar Produto</Link>

                    <small className='productValue'>R$ {product.value}</small>
                </div>
            </div>
        </div> 
    );
}
