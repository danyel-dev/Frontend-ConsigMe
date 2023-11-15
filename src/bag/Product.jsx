import './product.css'


export default function Product({product}) {
    return (
        <div className='bagProduct'>
            {product.name}
            {product.value}
            {product.size}
            {product.description}
        </div>
    )    
}
