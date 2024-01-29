import styles from './sacoleiraPosition.module.css'


export default function RankingSacoleira({indice, sacoleira}) {
    return(
        <div className={styles.sacoleira}>
            <p className={styles.sacoleiraIndice}>{indice}°</p>
            
            <a href={`/profileDetail/${sacoleira.id}`}><img src={sacoleira.image}className={styles.sacoleiraImage} /></a>
            
            <a href={`/profileDetail/${sacoleira.id}`}>
                <p className={styles.sacoleiraName}>{sacoleira.name}</p>
            </a>
            
            <p className={styles.sacoleiraAvaliacao}>
                {sacoleira.avaliacao}
                <i class="fa-solid fa-star"></i>    
            </p>
        </div>
    );
}
