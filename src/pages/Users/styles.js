import styled from "styled-components";
import Background from '../../assets/background-block.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;//estica a imagem para caber ao invez do padrao de clonar
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

  //height: 100vh;
`;

export const Image = styled.img`
    margin-top: 50px;
`;


export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg, 
        rgba(255, 255, 255, 0.6) 0.84%,
        rgba(255, 255, 255, 0.6) 0.85%, 
        rgba(255, 255, 255, 0.15) 100%
    );
    border-radius: 61px 61px 0px 0px;
    backdrop-filter: blur(30px);

    padding: 50px 36px;
    display: flex;
    flex-direction: column;

    height: 100vh;
`;

export const H1 = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 40px;

    text-align: center;

    color: #FFFFFF;
`;

export const User = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;

    //RETIRAR PADRAO:
    border: none;
    outline: none;

    //LETRA INTERNA:
    padding-left: 25px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20 px;
    line-height: 28px;

    color: #FFFFFF;

    p {
        font-weight: normal;
        font-style: normal;
        font-size: 20;
        line-height: 28px;

        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
`;
export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 120px;

    background: transparent;
    border-radius: 14px;
    border: 1px solid #FFFFFF;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;

    color: #FFFFFF;
    
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    &:hover{
        opacity: 0.8;
    }
    
    &:active{
        opacity: 0.5;
    }

    img{
        transform: rotate(180deg);
    }
`;
