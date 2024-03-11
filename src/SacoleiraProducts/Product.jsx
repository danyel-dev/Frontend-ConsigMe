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
    }, [product.productnote_set])

    return(
        <div className='item'>
            <a href={`/sacoleiras/${sacoleiraId}/products/${product.id}`}>
                <img className='item-image' src={product.image} alt={product.name} />
            </a>

            <div className='item-body'>     
                <a href={`/sacoleiras/${sacoleiraId}/products/${product.id}`}>
                    <h3>{product.name}</h3>
                </a>

                <p className='item-description'>{product.description.slice(0, 100)}...</p>

                {note? 
                    <p className='note-product'>
                        <span>
                            {note.toFixed(1)}
                            <i className="fa-solid fa-star"></i>
                        </span>
                        <small>({product.productnote_set.length} avaliações)</small>
                    </p> 
                :
                    <p className='note-product'>Nenhuma avaliação</p>
                }

                <div className='description-cart'>
                    <Link to={`/sacoleiras/${sacoleiraId}/products/${product.id}`} className='description-cart-button'>Acessar Produto</Link>

                    <small className='productValue'>R$ {product.value}</small>
                </div>
            </div>
        </div> 
    );
}
