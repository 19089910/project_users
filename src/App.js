import React from "react";
import People from './assets/people-talk.svg'
import Arrow from './assets/arrow.svg'
import Trash from './assets/trash.svg'

import {
  Container,
  H1,
  Image,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,
} from "./styles";

function App() {
  //aqui se coloca o javascript
  const users = [
    { id: Math.random(), name: "lucas", age: "22"},
    { id: Math.random(), name: "levi", age: "19"}
  ]

  return (
    <Container>
      <Image alt="logo-imagem-people" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar<img alt="seta" src={Arrow}></img></Button>

        <ul>
          {users.map((user) =>( 
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button><img alt="lata-de-lixo" src={Trash}></img></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}



export default App;