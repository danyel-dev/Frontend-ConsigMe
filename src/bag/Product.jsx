export default function Product({product}) {
    return (
        <div className="flex gap-2">
            <img src={product.image} alt={product.name} className="w-40 h-40" />

            <div className="flex flex-col justify-between gap-2 w-300">
                <div>
                    <h1 className="text-lg leading-tight">{product.name}</h1>
                </div>

                <div>
                    <small className="block">Tam: <span>{product.size}</span></small>
                   
                    <small className="block">Quant: <span>3</span></small>
                </div>

                <div className="flex justify-between">
                    <h1 className="font-bold">R$ {product.value}</h1>
                   
                    <small className="cursor-pointer bg-red-600 rounded-sm text-white pt-1 pb-1 pl-4 pr-4 font-bold">Deletar</small>
                </div>
            </div>
        </div>
    )    
}
