export default function Product({product}) {
    return (
        <div className="flex">
            <img src={product.image} alt={product.name} className="w-32 h-32" />

            <div>
                <h1 className="text-lg">{product.name}</h1>
                <p className="text-sm">Tam: <span>{product.size}</span></p>
                <p className="text-sm">Quant: <span>3</span></p>

                <div>
                    <h1 className="font-bold">R$ {product.value}</h1>

                </div>
            </div>
        </div>
    )    
}
