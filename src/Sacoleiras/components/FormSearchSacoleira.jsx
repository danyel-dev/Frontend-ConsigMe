import { styled } from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import SacoleiraComponent from './SacoleiraComponent';


const SearchSacoleiras = styled.form`
    width: 500px;
    
    @media(max-width: 600px) {
        width: 80%;
    };
    
    @media(max-width: 400px) {
        width: 90%;
    };
`;

const InputSearchSacoleiras = styled.input`
    padding: 7px 12px;
    width: 100%;
    background-color: whitesmoke;
    border-radius: 5px;
    font-size: 14px;
    border: 1px solid rgba(0, 0, 0, 0.08);
    transition: .3s all;

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
    }
`;

const iconInput = {
    position: 'relative'
}

const icon = {
    position: 'absolute',
    top: '11px',
    right: '12px',
    color: 'rgba(63, 43, 83, 0.8)'
}

const SacoleirasStyle = styled.div`
    width: 90%;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 100px 50px;

    @media(max-width: 900px) {
        grid-template-columns: 1fr 1fr;
        gap: 100px 70px;
    }

    @media(max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 100px 70px;
        padding: 0px 100px;
    }

    @media(max-width: 500px) {
        padding: 0px 50px;
    }

    @media(max-width: 400px) {
        padding: 0;
    }
`

const QuantitySacoleirasMessage = styled.h1`
    margin-top: 15px;
    font-size: 14px;
    font-weight: bold;
    color: rgba(0, 0, 0, .8);
`

const ListPagination = styled.ul`
    display: flex;
    gap: 1em;
`

export default function FormSearchSacoleiras() {
    const [valueSacoleira, setValueSacoleira] = useState("")
    const [sacoleiras, setSacoleiras] = useState([])
    const [qtdSacoleiras, setQtdSacoleiras] = useState()

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    
        axios.get('http://127.0.0.1:8000/sacoleiras', config).then(
            response => {
                setSacoleiras(response.data)  
            }
        ).catch(response => console.log(response))
    }, [])


    function handleSubmitSearchSacoleiras(e) {
        e.preventDefault()

        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    
        axios.get(`http://127.0.0.1:8000/sacoleiras/?search=${valueSacoleira}`, config).then(
            response => {
                setSacoleiras(response.data)

                if(response.data.length < 1) {
                    setQtdSacoleiras(`Nenhum resultado encontrado para "${valueSacoleira}"`)
                } else {
                    setQtdSacoleiras(`${response.data.length} resultado(s) encontrado(s) para "${valueSacoleira}"`)
                }
            }
        )
    }

    function handleChangeSearchInput(e) {
        setValueSacoleira(e.target.value)
    }

    return (
        <>
            <SearchSacoleiras onSubmit={handleSubmitSearchSacoleiras}>
                <div style={iconInput}>
                    <i style={icon} className="fa-solid fa-magnifying-glass"></i>

                    <InputSearchSacoleiras value={valueSacoleira} onChange={handleChangeSearchInput} type="text" placeholder="Pesquise pelo nome ou endereço" />
                </div>
            </SearchSacoleiras>

            <QuantitySacoleirasMessage>
                {qtdSacoleiras}
            </QuantitySacoleirasMessage>

            <SacoleirasStyle>
                {sacoleiras.map(sacoleira => <SacoleiraComponent key={sacoleira.id} sacoleira={sacoleira} />)}
            </SacoleirasStyle>

        </>
    );
}
