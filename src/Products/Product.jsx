import axios from 'axios';
import './product.css'


export default function Product({product}) {
    function handleAdditionProduct() {
        const url = "http://127.0.0.1:8000/bag/"
        
        axios.post(url, {user: product.user, product: product.url}).then(
            response => console.log(response)
        )
    }

    return(
        <div className='item'>
            <div className='item-body'>
                <div className='item-image'></div>
                
                <h3>{product.name}</h3>

                <p className='item-description'>{product.description}</p>

                <div className='description-cart'>
                    <button>Ver produto</button>

                    <i className="fa-solid fa-cart-shopping" onClick={handleAdditionProduct}></i>
                </div>
            </div>
        </div> 
    );
}
