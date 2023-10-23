import './informations.css'
import distribuidor from '../img/distribuidor.png'
import revendedor from '../img/revendedor.png'
import consumidorFinal from '../img/consumidor_final.png'


export default function Informations() {
    return(
        <div className='informations'>
            <h1 className='title-informations'>Quem são as três partes envolvidas no sistema de consignação?</h1>

            <div className='informations-parts'>
                <div>
                    <img src={distribuidor} alt="distribuidor" />
                    
                    <h3>Distribuidor</h3>

                    <p>O distribuidor é a fábrica ou depósito que usa a venda consignada como um canal de distribuição de suas mercadorias. Ele deixa estoque consignado com vendedores representantes e revendedoras sacoleiras.</p>
                </div>

                <div>
                    <img src={revendedor} alt="revendedor" />

                    <h3>Revendedor</h3>
                    
                    <p>A revendedora é também conhecida como sacoleira. Ela é a cliente do vendedor, relaciona-se com ele. Recebe o kit de mercadorias e fica com um pequeno estoque consignado para vender e paga os valores na cobrança da consignação.</p>
                </div>

                <div>
                    <img src={consumidorFinal} alt="consumidor" />

                    <h3>Consumidor Final</h3>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque illo esse, cupiditate ab aliquam corporis error dignissimos laboriosam et enim eaque nam, iure nulla beatae sed reprehenderit nesciunt neque sint.</p>
                </div>
            </div>
        </div>
    )
}
