import React, { useState, useRef } from 'react';
import axios from 'axios'
import People from '../../assets/people-talk.svg'
import Arrow from '../../assets/arrow.svg';
import { useNavigate } from 'react-router-dom';


import H1 from '../../components/Title'
import ContainerItens from '../../components/ConteinerItens';
import {
  Container,
  Image,
  InputLabel,
  Input,
  Button,
} from "./styles";

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  const navigate = useNavigate();

  async function addNewUSer() {
  // { data } == qualquer.data => e a response do back end
  // { data : newUser} renomeado o data para new user
    const { data : newUser} = await axios.post("http://localhost:3001/users", {
      //BODY PARAMS: ta enviando json para o back
      name: inputName.current.value, 
      age: inputAge.current.value,
    });
    setUsers([...users, newUser]);//vai adicionar o new user do back and no user do front para mostara na tela

    navigate('/usuarios')
  }

//<H1>Olá!</H1> => esta enviando "Olá!" para o ../..components/Title mas o <H1> nao tem que receber essa informação 
//isso e PROPS => propriedades
  return (
    <Container>
      <Image alt="logo-imagem-people" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button  onClick={addNewUSer}>
          Cadastrar<img alt="seta" src={Arrow}></img>
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Home;