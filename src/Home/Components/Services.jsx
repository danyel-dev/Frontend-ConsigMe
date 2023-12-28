import styles from './services.module.css'


export default function Services() {
    return (
        <div className={styles.services}>
            <h1 className={styles.servicesTitle}>ConsigMe: Serviços</h1>

            <div className={styles.card_services}>
                <div className={styles.card}>
                    <div id={styles.one} className={styles.cardImage}>
                        <h1>Histórico de revendas</h1>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae?</p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.two} className={styles.cardImage}>
                        <h1>Ranqueamento de sacoleiros(as)</h1>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.three} className={styles.cardImage}>
                        <h1>Catálogo de produtos</h1>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.four} className={styles.cardImage}>
                        <h1>Sacola fácil</h1>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.five} className={styles.cardImage}>
                        <h1>Sistema Intuitivo</h1>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.six} className={styles.cardImage}>
                        <h1>Estoque Consignado</h1>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad consectetur deserunt labore beatae? </p>
                </div>
            </div>
        </div>        
    );
}
