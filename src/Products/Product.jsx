import './product.css'


export default function Product({product}) {
    return(
        <div className='item'>
            <div className='item-body'>
                <div className='item-image'></div>
                
                <h3>{product.name}</h3>

                <p className='item-description'>{product.description}</p>

                <div className='description-cart'>
                    <button>Ver produto</button>

                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div> 
    );
}
