import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TitleComponent from './components/TitleComponent';
import FormSearchSacoleiras from './components/FormSearchSacoleira';

import { styled } from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SacoleiraComponent from './components/SacoleiraComponent';


const MainSacoleiras = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    padding: 10px;
`;

const SacoleirasStyle = styled.div`
    width: 90%;
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px 70px;
`

export default function Sacoleiras() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
    
        axios.get('http://127.0.0.1:8000/users/', config).then(response => setUsers(response.data))
    }, [])

    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />

            <MainSacoleiras>
                <TitleComponent />
                <FormSearchSacoleiras />

                <SacoleirasStyle>
                    {users.map(user => <SacoleiraComponent key={user.id} user={user} />)}
                </SacoleirasStyle>
            </MainSacoleiras>

            <Footer />
        </>
    );
}
