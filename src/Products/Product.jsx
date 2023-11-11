import axios from 'axios';
import './product.css'


export default function Product({product}) {
    function handleAdditionProduct() {
        // alert("oi")
        
        const url = "http://127.0.0.1:8000/bag/"
        
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            },

        }
        
        const body = {user: product.user, product: product.url}

        axios.post(url, body, config).then(response => {
            
            setTimeout(function() {
                alert("alerta")
                window.close()
            }, 3000)
        })
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
