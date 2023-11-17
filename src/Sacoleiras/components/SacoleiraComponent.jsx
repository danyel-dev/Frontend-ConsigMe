import { styled } from "styled-components";

const SacoleiraComponentStyle = styled.div`
    height: 300px;
    background-color: red;
`;


export default function SacoleiraComponent({user}) {
    return (
        <SacoleiraComponentStyle>
            <p>{user.username}</p>
        </SacoleiraComponentStyle>
    );
}