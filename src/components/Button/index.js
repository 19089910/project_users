import React from "react";
import { Button as ContainerButton } from './styles'

function Button({ children }){
    return(
        <ContainerButton>{ children }</ContainerButton>
    )
};

export default Button;