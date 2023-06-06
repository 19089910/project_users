import React from "react";
import { Button as ContainerButton } from './styles'
//spread operaitor: vai capturar todos os PROPS e atribui-los a variavel props assim so repassando todas as propriedades html
function Button({ children, ...props}){
    return(
        <ContainerButton { ...props} >{ children }</ContainerButton>
    )
};

export default Button;