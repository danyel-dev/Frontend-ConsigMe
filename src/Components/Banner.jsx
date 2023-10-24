import Header from "./Header";

export default function Banner() {
    return (
        <div id="banner">
            <Header color="rgba(0, 0, 0, 0.5)" />

            <div id='banner-card'>
                <h2>ConsigMe</h2>
                <p>Sua plataforma para compra e venda de produtos por consignação, fácil e rápida de se utilizar. venha conhecer nossos serviços.</p>
                <button>Ver serviços</button>
            </div>
        </div>
    );
}
