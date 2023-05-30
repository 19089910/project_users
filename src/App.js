import React, { useState, useRef } from 'react';
import axios from 'axios'
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
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUSer() {
    const data = await axios.post("http://localhost:3001/users", {
      //BODY PARAMS: ta enviando json para o back
      name: inputName.current.value, 
      age: inputAge.current.value,
    });
    console.log(data)//TEMPORARIO: PARA VER SE SALVOU NO BACK
  /* VAMOS DELETAR ISSO:
    setUsers([
      ...users, 
      { 
        id: Math.random(),
        name: inputName.current.value, 
        age: inputAge.current.value 
      },
    ]);
    */
  }

  function deletUser(userId) {
    const newUsers = users.filter( user => user.id !== userId )
    setUsers(newUsers)
  }

  return (
    <Container>
      <Image alt="logo-imagem-people" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUSer}>
          Cadastrar<img alt="seta" src={Arrow}></img>
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p><p>{user.age}</p>
              <button onClick={()  => deletUser(user.id)}>
                <img alt="lata-de-lixo" src={Trash}></img>
              </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}

export default App;