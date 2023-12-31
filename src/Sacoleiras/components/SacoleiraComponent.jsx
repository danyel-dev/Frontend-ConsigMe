import { Link } from "react-router-dom";
import { styled } from "styled-components";


const SacoleiraComponentStyle = styled.div`
    height: max-height;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    position: relative;
    padding: 20px 10px;
    border-radius: 3px;
    border: 2px solid rgba(137, 43, 226, .2);
`;

const ImageSacoleira = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 50%;
    position: absolute;
    top: -65px;
`;

const SacoleiraInfo = styled.div`
    margin-top: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const NameSacoleira = styled.h1`
    font-size: 1.2em;
    display: flex;
    flex-direction: column;
`;

const DescriptionSacoleira = styled.p`
    text-align: center;
    color: rgba(0, 0, 0, .7);
`;

const ButtonSeeProducts = styled.button`
    color: white;
    font-weight: bold;
    padding: 4px 10px;
    border-radius: 3px; 
    background-color: blueviolet;
    font-size: 12px;
    cursor: pointer;
`;

const PhoneNumberContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
`

const PhoneNumberIcon = styled.i`
    color: green;
    font-size: 16px;
`

const PhoneNumber = styled.small`
    color: rgba(0, 0, 0, .7);
    font-weight: bold;
    font-size: 14px;
`

const AddressContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
    font-size: 14px;
    color: rgba(0, 0, 0, .8);
`

export default function SacoleiraComponent({ sacoleira }) {
    return (
        <SacoleiraComponentStyle>
            <ImageSacoleira src={sacoleira.image} />
            
            <SacoleiraInfo>
                <NameSacoleira>
                    <Link to={`/sacoleiras/${sacoleira.id}/products/`}>
                        {sacoleira.name}
                    </Link>

                    <PhoneNumberContainer>
                        <PhoneNumberIcon className="fa-brands fa-whatsapp"></PhoneNumberIcon>
                        <PhoneNumber>{sacoleira.phone_number}</PhoneNumber>
                    </PhoneNumberContainer>
                </NameSacoleira>
                
                <DescriptionSacoleira>
                    {sacoleira.bio.slice(0, 200)}...
                </DescriptionSacoleira>
            </SacoleiraInfo>

            <AddressContainer>
                <i className="fa-solid fa-location-dot"></i>
                <p>{sacoleira.address}</p>
            </AddressContainer>

            <ButtonSeeProducts>Ver Produtos</ButtonSeeProducts>
        </SacoleiraComponentStyle>
    );
}
