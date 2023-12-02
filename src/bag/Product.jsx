import './product.css'


export default function Product({product}) {
    return (
        <div className='product'>
            <div className='leftInfos'>
                <img src={product.image} alt='imagem camisa' />
                
                <h4 className='nameProduct'>{product.name}</h4>  
                <span className='sizeProduct'>{product.size}</span>
            </div>

            <p className='valueProduct'>Preço: R$ {product.value}</p>
        </div>
    )    
}
