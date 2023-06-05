import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ConteinerItens';
import {
  Container,
  Image,
  Button,
  User,
} from "./styles";

function Users() {
  const [users, setUsers] = useState([]);

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
      <Image alt="logo-imagem-people" src={Avatar} />
      <ContainerItens polymorphism={true}>
        <H1>Usuários</H1>
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

        <Button to="/">
        <img alt="seta" src={Arrow}></img> voltar
        </Button>


      </ContainerItens>
    </Container>
  );
}

export default Users;