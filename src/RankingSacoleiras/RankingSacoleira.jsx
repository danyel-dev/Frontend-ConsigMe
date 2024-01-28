import SacoleiraPosition from './SacoleiraPosition'
import styles from './RankingSacoleira.module.css'

import axios from "axios";
import { useEffect, useState } from "react";


export default function RankingSacoleira() {
    const [ranking, setRanking] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json",
            }  
        }

        axios.get('http://127.0.0.1:8000/ranking/', config).then(
            response => {
                const _ = require('lodash');

                const listaDeObjetos = response.data

                const listaOrdenada = _.orderBy(listaDeObjetos, ['media'], ['desc']);

                setRanking(listaOrdenada);
                console.log(listaOrdenada)
            }
        )
    }, [])

    return(
        <div className={styles.ranking}>
            {ranking.map((item, indice) => <SacoleiraPosition key={item.id} indice={indice + 1} sacoleira={item} />)}
        </div>
    );
}
