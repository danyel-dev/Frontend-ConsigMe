import { styled } from "styled-components"


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
    padding: 10px 10px 10px 15px;
    width: 100%;
    background-color: whitesmoke;
    border-radius: 5px;
    font-size: 15px;
    border: 1px solid rgba(0, 0, 0, 0.08);

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
`;

export default function FormSearchSacoleiras() {
    return (
        <SearchSacoleiras>
            <InputSearchSacoleiras type="text" placeholder="Faça sua pesquisa aqui" />
        </SearchSacoleiras>
    );
}
