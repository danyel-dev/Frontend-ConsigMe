import axios from "axios"
import { useEffect, useState } from "react"

export default function Product({productURL}) {
    const [product, setProduct] = useState({})

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }

        axios.get(productURL, config).then(response => setProduct(response.data))
    }, [])

    return (
        <div className="flex items-center gap-2 w-300">
            <img src={product.image} alt={product.name} className="w-40 h-40" />

            <div className="flex flex-col justify-between gap-2">
                <div> 
                    <h1 className="text-sm leading-tight">{product.name}</h1>
                </div>

                <div>
                    <small className="block">Tam: <span>{product.size}</span></small>
                   
                    <small className="block">Quant: <span>3</span></small>
                </div>

                <div className="flex justify-between">
                    <h1 className="font-bold">R$ {product.value}</h1>
                   
                    <small className="text-xs cursor-pointer bg-red-600 rounded-xl text-white pt-1 pb-1 pl-2 pr-2 font-bold">Deletar</small>
                </div>
            </div>
        </div>
    )    
}
