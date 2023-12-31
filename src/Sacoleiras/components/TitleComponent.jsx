import { styled } from "styled-components";

const TitleStyle = styled.h1`
    font-size: 1.2em;
    color: rgb(67, 67, 116);
    margin-bottom: 10px;
    text-align: center;
    width: 600px;
    font-weight: bold;

    @media(max-width: 700px) {
        width: 80%
    }

    @media(max-width: 400px) {
        width: 95%
    }
`;


export default function TitleComponent() {
    return (
        <TitleStyle>Encontre sacoleiras perto de você e veja os seus produtos</TitleStyle>
    );
}
