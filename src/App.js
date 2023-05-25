import React from "react";
import People from './assets/people-talk.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  return (
    <Container>
      <Image alt="logo-imagem-people" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;