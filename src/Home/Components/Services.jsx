import styles from './services.module.css'


export default function Services() {
    return (
        <div id='services' className={styles.services}>
            <h1 className={styles.servicesTitle}>ConsigMe: Serviços</h1>

            <div className={styles.card_services}>
                <div className={styles.card}>
                    <div id={styles.one} className={styles.cardImage}>
                        <h1>Score</h1>
                    </div>

                    <p>O Score é uma pontuação dada as sacoleiras, ele é calculado através das avaliações dos clientes  e lojistas</p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.two} className={styles.cardImage}>
                        <h1>Ranqueamento de sacoleiros(as)</h1>
                    </div>

                    <p>Sacoleiras que se dedicam e tem boas avaliações estarão em posições altas no nosso ranking de sacoleiras.</p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.three} className={styles.cardImage}>
                        <h1>Catálogo de produtos</h1>
                    </div>

                    <p>O catálogo de produtos é uma forma das sacoleiras mostrarem os seus produtos para os seus clientes.</p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.four} className={styles.cardImage}>
                        <h1>Sacola fácil</h1>
                    </div>

                    <p>A "Sacola" é onde estarão os produtos que você teve interesse e salvou para consultar depois</p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.five} className={styles.cardImage}>
                        <h1>Plataforma Intuitiva</h1>
                    </div>

                    <p>O ConsigMe é uma Plataforma fácil de se usar, o usuário não vai ter dificuldades de usar, encontrando todas as informações necessárias numa interface simples com instruções curtas.</p>
                </div>
                
                <div className={styles.card}>
                    <div id={styles.six} className={styles.cardImage}>
                        <h1>Cadastro de Lojistas</h1>
                    </div>

                    <p>A plataforma também permite o cadastro de estabelecimentos dos lojistas, sendo assim completando as 3 partes nesse modelo de negócio.</p>
                </div>
            </div>
        </div>        
    );
}
