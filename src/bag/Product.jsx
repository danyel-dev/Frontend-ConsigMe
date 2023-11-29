import './product.css'
import camisa from '../img/produtos/camisa1.webp'

export default function Product({product}) {
    console.log(product)
    return (
        <div className='product'>
            <div className='leftInfos'>
                <img src={camisa} alt='imagem camisa' />
                
                <h4 className='nameProduct'>{product.name}</h4>  
                <span className='sizeProduct'>{product.size}</span>
            </div>

            <p className='valueProduct'>Preço: R$ {product.value}</p>
        </div>
    )    
}
