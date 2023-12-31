import { styled } from "styled-components"
import { useEffect, useState } from "react";
import axios from "axios";
import SacoleiraComponent from './SacoleiraComponent';
import { useNavigate, useLocation } from "react-router-dom";


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
    const [pagination, setPagination] = useState([])

    const location = useLocation();
    
    const navigate = useNavigate();

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        
        let pages

        axios.get('http://127.0.0.1:8000/sacoleiras', config).then(response => {
            if(response.data.count <= 1)
                pages = 1
            else 
                pages = Math.round(response.data.count / 1)    
            
            let arr = []
            for(let i = 1; i <= pages; i++) {
                arr.push(i)
            }   
    
            setPagination(arr)
        })

        const page = new URLSearchParams(location.search).get('page');

        let url;

        if(page) 
            url = `http://127.0.0.1:8000/sacoleiras/?page=${page}`;
        else 
            url = `http://127.0.0.1:8000/sacoleiras/`;

        axios.get(url, config).then(
            response => {
                setSacoleiras(response.data.results)  
            }
        ).catch(response => console.log(response))
    }, [])


    function handleSubmitSearchSacoleiras(e) {
        e.preventDefault()
        navigate(`?search=${valueSacoleira}`)
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    
        axios.get(`http://127.0.0.1:8000/sacoleiras/?search=${valueSacoleira}`, config).then(
            response => {
                setSacoleiras(response.data.results)

                if(response.data.results < 1) {
                    setQtdSacoleiras(`Nenhum resultado encontrado para "${valueSacoleira}"`)
                } else {
                    setQtdSacoleiras(`${response.data.results.length} resultado(s) encontrado(s) para "${valueSacoleira}"`)
                }
            }
        )
    }

    function handleChangeSearchInput(e) {
        setValueSacoleira(e.target.value)
    }

    function handlePaginationPrevious(e) {
        const page = new URLSearchParams(location.search).get('page');
        const search = new URLSearchParams(location.search).get('search');

        let url;

        console.log(search)

        url = `?search=matheus`
        navigate(url)
    

        // if(page > 1 && page <= pagination.length) {
        //     navigate(`/sacoleiras?page=${page-1}`)
        // }
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

            <div>
                <ListPagination>
                    <li onClick={handlePaginationPrevious}>previous</li>
                    {pagination.map(number => <li>{number}</li>)}
                    <li>next</li>
                </ListPagination>
            </div>
        </>
    );
}
