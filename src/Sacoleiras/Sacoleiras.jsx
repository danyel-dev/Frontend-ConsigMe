import { styled } from 'styled-components';

import Header from '../Components/Header';
import Footer from '../Components/Footer';
import TitleComponent from './components/TitleComponent';
import FormSearchSacoleiras from './components/FormSearchSacoleira';


export default function ListProducts() {
    const MainSacoleiras = styled.main`
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
        padding: 10px;
    `;

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
