import styles from './services.module.css'


export default function Services() {
    return (
        <div className={styles.services}>
            <h1>ConsigMe: Serviços</h1>

            <div className={styles.card_services}>
                <div className={styles.card}>
                    <div id={styles.one} className={styles.cardImage}>
                        <h4>Histórico de revendas</h4>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur</p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.two} className={styles.cardImage}>
                        <h4>Ranqueamento de sacoleiros(as)</h4>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.three} className={styles.cardImage}>
                        <h4>Catálogo de produtos</h4>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.four} className={styles.cardImage}>
                        <h4>Sacola fácil</h4>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.five} className={styles.cardImage}>
                        <h4>Sistema Intuitivo</h4>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.six} className={styles.cardImage}>
                        <h4>Estoque Consignado</h4>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
            </div>
        </div>        
    );
}
