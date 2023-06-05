import styled from "styled-components";
import Background from '../../assets/background-purple.svg'


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;//estica a imagem para caber ao invez do padrao de clonar
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

  //  height: 100vh;
`;

export const Image = styled.img`
    margin-top: 50px;
`;

export const InputLabel = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    letter-spacing: -0.408px;

    color: #EEEEEE;

    margin-left: 25px;
`;

export const Input = styled.input`
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;
    margin-bottom: 34px;
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
`;