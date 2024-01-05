import './product.css'
import { Link } from 'react-router-dom';


export default function Product({ product, sacoleiraId }) {
    return(
        <div className='item'>
            <a href={`/sacoleiras/${sacoleiraId}/products/${product.id}`}><img className='item-image' src={product.image} alt={product.name} /></a>

            <div className='item-body'>     
                <a href={`/sacoleiras/${sacoleiraId}/products/${product.id}`}>
                    <h3>{product.name}</h3>
                </a>

                <p className='item-description'>{product.description.slice(0, 100)}...</p>
                
                <small className="item-comments-number"><i className="fa-solid fa-comment"></i>4 comentários</small>
 
                <div className='description-cart'>
                    <Link to={`/sacoleiras/${sacoleiraId}/products/${product.id}`} className='description-cart-button'>Ver Produto</Link>

                    <small className='productValue'>R$ {product.value}</small>
                </div>
            </div>
        </div> 
    );
}
