import styled from "styled-components";

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

export const ImgContainer = styled.div `
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

export const Cat = styled.div `
    display: flex;
    justify-content: center;

    #cat {
        margin-left: 50px;
        color: #fff;
        border-radius: 6px;
    }
`;