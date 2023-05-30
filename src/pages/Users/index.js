import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import People from '../../assets/people-talk.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'


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
  // { data } == qualquer.data => e a response do back end
  // { data : newUser} renomeado o data para new user
    const { data : newUser} = await axios.post("http://localhost:3001/users", {
      //BODY PARAMS: ta enviando json para o back
      name: inputName.current.value, 
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);//vai adicionar o new user do back and no user do front para mostara na tela
  }
  //O userEffect esta responsavel pelo get na hora do reflex...
  useEffect(() => {//inicia frontend junto ao de baixo:
    async function fetchUser(){
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers)
    }
    fetchUser()
  }, [])//se mudar alguma variavel aqui, vai reExecultar o de cima


  async function deletUser(userId) {
    //nao tem nem um 'response' do back, entao nao precia capturar data
    await axios.delete(`http://localhost:3001/users/${userId}`)//deleta no back (ROUTENT PARAMS)
    const newUsers =  users.filter( user => user.id !== userId )//deleta no front
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