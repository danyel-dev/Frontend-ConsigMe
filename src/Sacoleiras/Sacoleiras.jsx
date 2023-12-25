import Header from '../Components/Header/Header';
import Footer from '../Components/Footer';
import TitleComponent from './components/TitleComponent';
import FormSearchSacoleiras from './components/FormSearchSacoleira';

import { styled } from 'styled-components';


const MainSacoleiras = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
    padding: 10px;
`;


export default function Sacoleiras() {
    return (
        <>
            <Header color={"rgb(63, 43, 83)"} />

            <MainSacoleiras>
                <TitleComponent />
                <FormSearchSacoleiras />
            </MainSacoleiras>

            <Footer />
        </>
    );
}
