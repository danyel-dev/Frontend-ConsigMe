import Header from '../Components/Header';
import './products.css';
import Footer from '../Components/Footer';


export default function Products() {
    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />

            <div className='products'>

                <form className='formSearchProduct'>
                    <input type="text" placeholder='Pesquise por um produto aqui' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>

                <select name="" id="category-products">
                    <option value="">Camisetas</option>
                    <option value="">Calças</option>
                    <option value="">Sapatos</option>
                    <option value="">Roupa intima</option>
                </select>

                <div className='container'>
                    <div className='item'>
                        <div className='item-image one'></div>

                        <div className='item-body'>
                            <h3>Calça masculina Nike</h3>

                            <div className='description-cart'>
                                <button>Ver descrição</button>

                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <div className='item-image two'></div>

                        <div className='item-body'>
                            <h3>Calça masculina Branca</h3>
                        
                            <div className='description-cart'>
                                <button>Ver descrição</button>

                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <div className='item-image three'></div>

                        <div className='item-body'>
                            <h3>Camisa Polo Azul</h3>

                            <div className='description-cart'>
                                <button>Ver descrição</button>

                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <div className='item-image four'></div>

                        <div className='item-body'>
                            <h3>Camisa Polo Verde</h3>

                            <div className='description-cart'>
                                <button>Ver descrição</button>

                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <div className='item-image five'></div>

                        <div className='item-body'>
                            <h3>Chinelo Feminino</h3>

                            <div className='description-cart'>
                                <button>Ver descrição</button>

                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <div className='item-image six'></div>

                        <div className='item-body'>
                            <h3>Tênis da Nike Branco</h3>

                            <div className='description-cart'>
                                <button>Ver descrição</button>

                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                    
                    <div className='item'>
                        <div className='item-image seven'></div>

                        <div className='item-body'>
                            <h3>Vestido Vermelho</h3>

                            <div className='description-cart'>
                                <button>Ver descrição</button>

                                <i className="fa-solid fa-cart-shopping"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}
