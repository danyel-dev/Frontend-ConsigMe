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
            }
        )
    }, [])

    return(
        <div>
            {ranking.map(item => <p>{item.media}</p>)}
        </div>
    );
}
