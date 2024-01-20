import axios from "axios"
import { useEffect, useState } from "react"
import './product.css'


export default function Product({productURL, idBag, setBagProducts}) {
    const [product, setProduct] = useState("")

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }

        axios.get(productURL, config).then(response => {
            setProduct(response.data)
        })
    }, [])

    function handleRemovedProduct() {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "token " + localStorage.getItem("token")
            }
        }

        axios.get(`http://127.0.0.1:8000/bag/${idBag}/`, config)
        .then(response => {
            var arr = response.data.products.filter(item => item !== productURL)
        
            axios.patch(`http://127.0.0.1:8000/bag/${idBag}/`, {"products": arr}, config).then(response => {
                setProduct(response.data)
                setBagProducts(response.data.products)
                alert('Produto removido!')
            })
        })
    }


    return (    
        <div className="bag-product">
            <img src={product.image} alt={product.name} className="bag-product-image" />

            <div className="bag-product-body">
                <div>
                    <p className="product-name">{product.name}</p>
                    <small>Tam: <span>{product.size}</span></small>
                    <h1>R$ {product.value}</h1>
                </div>                
                
                <small className="product-button" onClick={handleRemovedProduct}>Remover da lista</small>
            </div>
        </div>
    )    
}
