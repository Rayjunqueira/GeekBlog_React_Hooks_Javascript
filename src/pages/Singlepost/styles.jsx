import styled from "styled-components";

export const Container = styled.div `

`;

export const ImgContainer = styled.div `
    align-items: center;
    text-align: center;
    margin-top: 3vh;

    img {
        border-radius: 6px;
        height: 40vh;
    }

    @media (max-width: 754px ) {
        img {
            height: 35vh;
        }
    }    

    @media (max-width: 654px ) {
        img {
            height: 30vh;
        }
    }    

    @media (max-width: 546px ) {
        img {
            height: 25vh;
        }
    }    

    @media (max-width: 464px ) {
        img {
            height: 20vh;
        }
    }    

    @media (max-width: 380px ) {
        img {
            height: 15vh;
        }
    }    

`;

export const Adsense = styled.div `
    align-items: center;
    text-align: center;
    margin-top: 14px;
    
    img {
        width: 77vh;
        cursor: pointer;
    }

    @media (max-width: 727px ) {
        img {
            width: 67vh;
        }
    }    

    @media (max-width: 613px ) {
        img {
            width: 63vh;
        }
    }    

    @media (max-width: 564px ) {
        img {
            width: 56vh;
        }
    }    

    @media (max-width: 528px ) {
        img {
            width: 50vh;
        }

    }    
    @media (max-width: 462px ) {
        img {
            width: 36vh;
        }
    }    

`;


export const Title = styled.div `
    align-items: center;
    text-align: center;
    letter-spacing: 0.1rem;

    @media (max-width: 754px ) {
        h2 {
            font-size: 23px;
        }
    }    
    @media (max-width: 654px ) {
        h2 {
            font-size: 18px;
        }
    }    

`;

export const Text = styled.div `
    margin: 0 60px;
`;

export const Relatedposts = styled.div `
    h2 {
        margin-left: 20px;
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


export const Relatedcards = styled.div `
    display: flex;

    @media (max-width: 962px ) {
        display: inline;
        justify-content: center;
        text-align: center;
    }    
`;

export const Card = styled.div `
    margin: 6px;

    @media (max-width: 1210px ) {
        h2 {
            font-size: 20px;
        }    

        p {
            font-size: 13px;
        }
    }    
`;

export const ImgCard= styled.div `
    img {
        border-radius: 6px;
        cursor: pointer;
        height: 28vh;
    }

    @media (max-width: 1546px ) {
        img {
            height: 22vh;
        }    
    }    

    @media (max-width: 1210px ) {
        img {
            height: 20vh;
        }    
    }    

    @media (max-width: 1168px ) {
        img {
            height: 19vh;
        }    
    }    

    @media (max-width: 1102px ) {
        img {
            height: 18vh;
        }    
    }    
`;