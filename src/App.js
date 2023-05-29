import React, { useState, useRef } from 'react';
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

  /*const users = [
    { id: Math.random(), name: "lucas", age: "22"},
    { id: Math.random(), name: "levi", age: "19"}
  ]*/
  //VAVIAVIES ESTADOS
  const [users, setUsers] = useState([]);
  /*
  VAVIAVIES ESTADOS
    const [ name, setName ] = useState();
    const [ age, setAge ] = useState();

  VARIAVIES ESTADOS
    function chanheInputName(event) {
      setName(event.target.value)
    }
    function chanheInputAge(event) {
      setAge(event.target.value)
    }
  */

  //VAVIAVIES REF
  const inputName = useRef();
  const inputAge = useRef();

  function addNewUSer() {
    setUsers([
      ...users, 
      { 
        id: Math.random(),
        name: inputName.current.value, 
        age: inputAge.current.value 
      },
    ]);
  }

  return (
    <Container>
      <Image alt="logo-imagem-people" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>,.

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
              <button><img alt="lata-de-lixo" src={Trash}></img></button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
}



export default App;