import styled from "styled-components";
import Background from '../../assets/background-block.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;//estica a imagem para caber ao invez do padrao de clonar
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%;
     min-height: 100vh;
`;

export const Image = styled.img`
    margin-top: 50px;
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