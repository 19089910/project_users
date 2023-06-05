import React from 'react'
import { ContainerItens as Container} from './styles'

function ContainerItens({ children, polymorphism }){
    return(//polymorphism ao ser carregado pelo Users e true 
        <Container polymorphism={polymorphism}>{children}</Container>//polymorphism={true} assim passa para o styles
    )
}

export default ContainerItens