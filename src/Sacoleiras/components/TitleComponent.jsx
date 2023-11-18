import { styled } from "styled-components";

const TitleStyle = styled.h1`
    font-size: 1.5em;
    color: rgb(67, 67, 116);
    margin-bottom: 20px;
    text-align: center;
    width: 600px;

    @media(max-width: 700px) {
        width: 80%
    }

    @media(max-width: 400px) {
        width: 95%
    }
`;


export default function TitleComponent() {
    return (
        <TitleStyle>Pesquise por sacoleiras e veja seus produtos, faça suas compras^^</TitleStyle>
    );
}
