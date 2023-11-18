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
    transition: .3s all;

    &:hover {
        border: 1px solid rgba(0, 0, 0, 0.3);
    }
`;

const iconInput = {
    position: 'relative'
}

const icon = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    color: 'rgba(0, 0, 0, .7)'
}

export default function FormSearchSacoleiras() {
    return (
        <SearchSacoleiras>
            <div style={iconInput}>
                <i style={icon} className="fa-solid fa-magnifying-glass"></i>
                <InputSearchSacoleiras type="text" placeholder="Faça sua pesquisa aqui" />
            </div>
        </SearchSacoleiras>
    );
}
