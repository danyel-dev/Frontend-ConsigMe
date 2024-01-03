import './product.css'
import { Link } from 'react-router-dom';


export default function Product({product}) {
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
