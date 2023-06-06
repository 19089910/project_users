import { styled } from "styled-components";
import { Link } from 'react-router-dom';


export const Button = styled(Link)`
    width: 342px;
    height: 74px;
    margin-top: ${props => props.isBack ? '120px' : '130px'};

    background: ${props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
    border-radius: 14px;
    border: ${props => props.isBack ?  '1px solid #FFFFFF' : 'none'};

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
        transform: ${props => props.isBack && 'rotate(180deg);'};
    }
`;