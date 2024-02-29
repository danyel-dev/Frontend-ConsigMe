import styles from './informations.module.css'
import distribuidor from '../../img/distribuidor.png'
import revendedor from '../../img/revendedor.png'
import consumidorFinal from '../../img/consumidor_final.png'


export default function Informations() {
    return(
        <div className={styles.informations}>
            <h1 className={styles.titleInformations}>Quem são as três partes envolvidas no sistema de consignação?</h1>

            <div className={styles.informationsParts}>
                <div>
                    <img src={distribuidor} alt="distribuidor" />

                    <h3>Consignador</h3>

                    <p>Esta é a parte que fornece as mercadorias para serem vendidas pelo varejista. O consignador mantém a propriedade legal das mercadorias até que sejam vendidas ao consumidor final.</p>
                </div>

                <div>
                    <img src={revendedor} alt="revendedor" />

                    <h3>Consignatário</h3>
                    
                    <p>O consignatário é a parte que recebe as mercadorias do consignador e as exibe para venda em sua loja. O varejista não é o proprietário legal das mercadorias até que sejam vendidas ao consumidor final.</p>
                </div>

                <div>
                    <img className={styles.finnalyConsumer} src={consumidorFinal} alt="consumidor" />

                    <h3>Consumidor Final</h3>

                    <p>Esta é a pessoa que compra as mercadorias do varejista. Quando a venda é realizada, o varejista paga uma comissão ao consignador, e a propriedade legal das mercadorias é transferida do consignador.</p>
                </div>
            </div>
        </div>
    )
}
