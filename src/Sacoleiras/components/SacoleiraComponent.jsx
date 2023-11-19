import { Link } from "react-router-dom";
import { styled } from "styled-components";


const SacoleiraComponentStyle = styled.div`
    height: max-height;
    background-color: whitesmoke;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding: 20px;
`;

const ImageSacoleira = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    top: -60px;
`;

const SacoleiraInfo = styled.div`
    margin-top: 90px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1em;
`;

const NameSacoleira = styled.h1`
    font-size: 1.2em;
`;

const DescriptionSacoleira = styled.p`
    text-align: center;
    color: rgba(0, 0, 0, .7);
`;

const ButtonSeeProducts = styled.button`
    margin-top: 50px;
    color: white;
    font-weight: bold;
    padding: 8px 12px;
    border-radius: 3px; 
    background-color: blueviolet;
    font-size: 12px;
    cursor: pointer;
`;

export default function SacoleiraComponent({user}) {
    return (
        <SacoleiraComponentStyle>
            <ImageSacoleira src="https://img.cancaonova.com/cnimages/canais/uploads/sites/6/2018/03/formacao_1600x1200-como-a-presenca-da-mulher-pode-ser-harmonia-no-mundo.jpg" />
            
            <SacoleiraInfo>
                <NameSacoleira>
                    <Link to={`/sacoleiras/${user.id}/products/`} valor={"dois"}>
                        {user.username}
                    </Link>
                </NameSacoleira>
                
                <DescriptionSacoleira>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, dolorem veritatis. Omnis nam veniam aliquid non autem sint dolore impedit? Animi voluptatibus temporibus quae odit corporis explicabo accusamus enim ut!</DescriptionSacoleira>
                </SacoleiraInfo>

                <ButtonSeeProducts>Ver Produtos</ButtonSeeProducts>
        </SacoleiraComponentStyle>
    );
}
