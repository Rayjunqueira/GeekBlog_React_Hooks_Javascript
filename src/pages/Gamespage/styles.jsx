import styled from "styled-components";

export const Container = styled.div `

`;

export const LastNews = styled.div `
    h2 {
        margin: 13px;
    }
`;

export const CardsContainer = styled.div `
    display: grid;
    margin: 0 20px;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 1026px ) {
        align-items: center;
        text-align: center;
        grid-template-columns: 1fr 1fr;  
    }    

    @media (max-width: 692px ) {
        display: flex;
        flex-direction: column;
    }    
`;
