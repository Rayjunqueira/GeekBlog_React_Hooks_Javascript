import styled from "styled-components";

export const Container = styled.div `

`;

export const Navbar = styled.div `
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    background-color: black;

    h2 {
        color: fff;
    }

    img {
        cursor: pointer;
        height: 12.6vh;
    }  
`;

export const LogoContainer = styled.div `
    @media (max-width: 966px ) {
        img {
            height: 11vh;
        }    
    }    

    @media (max-width: 438px ) {
        img {
            height: 8vh;
        }
    }    

    @media (max-width: 358px ) {
        img {
            height: 6vh;
        }
    }    
`;

export const Links = styled.div ` 

    ul {
        display: flex;
    }

    li {
        color: #fff;
        text-decoration: none;
        list-style-type: none;
        margin: 1.4vh;
        cursor: pointer;
        letter-spacing: 0.1rem;
        position: relative;

        &::after {
            content: "";
            width: 0;
            height: 4px;
            background-color: #ff914d;
            position: absolute;
            bottom: 0;
            left: 0;
        }

        &:hover:after {
            width: 100%;
        }
    }

    @media (max-width: 966px ) {
        ul {
            display: none;
        }
    }    
`;

export const SocialNetworks = styled.div `
    padding: 0 5vh;

    #face {
        color: #fff;
        cursor: pointer;
        margin: 1.2vh;

        &:hover {
            color: #3B5998;
        }
    }

    #insta {
        color: #fff;
        cursor: pointer;
        margin: 1.2vh;

        &:hover {
            color: #DD2A7B;
        }
    }

    #twit {
        color: #fff;
        cursor: pointer;
        margin: 1.2vh;

        &:hover {
            color: #00ACEE;
        }
    }

    @media (max-width: 1146px ) {
        #face {
            display: none;
        }

        #insta {
            display: none;
        }

        #twit {
            display: none;
        }
    }
`;

export const Burger = styled.div `
    display: none;

    #icon_burger {
        color: #fff;
        cursor: pointer;
        margin-right: 16px;
        font-size: 4vh;
    }

    @media (max-width: 966px ) {
        display: flex;
    }    

    @media (max-width: 444px ) {
        font-size: 2vh;
        margin-right: 0px;
    }    
`;

export const Searchbar = styled.div `
    align-items: center;
    text-align: center;
    background-color: black;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;

    button {
        cursor: pointer;
        font-size: 27px;
        margin-bottom: 10px;
        outline: none;
        background-color: black;
        border: none;
        color: #fff;
    }

    input {
        margin-bottom: 10px;
        width: 30vh;
        height: 3.5vh;
        border-radius: 6px;
        outline: none;
        border: none;
    }

    @media (max-width: 966px ) {
       display: none;
    }    
`;

export const NavbarMobile = styled.div `
    background-color: #3d3939;
    position: absolute;
    left: 50%:
    top: 50%;
    height: 100%;
    width: 45%;
    align-items: center;


    input {
        border-radius: 6px;
        border: none;
        outline: none;
        height: 3.6vh;
        width: 75%
    }
    
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        margin-left: 5px;
        background-color: #ff914d;
        color: #fff;
    }

    @media (max-width: 510px ) {
        width: 60%;
     }     
`;

export const inputMobile = styled.div `
    margin: 2vh;
    text-align: center;
    display: flex;
    justify-content: center;
`;

export const MobileLinks = styled.div `


    li {
        color: #fff;
        text-decoration: none;
        list-style-type: none;
        margin: 1.9vh;
        cursor: pointer;
        letter-spacing: 0.1rem;
        position: relative;

        &::after {
            content: "";
            width: 0;
            height: 4px;
            background-color: #ff914d;
            position: absolute;
            bottom: 0;
            left: 0;
        }

        &:hover:after {
            width: 100%;
        }
    }
`;