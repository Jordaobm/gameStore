import React from 'react';
import { BiError } from 'react-icons/bi';
import { Container, Info, Content } from './styles';

const ErrorPage: React.FC = () => {
  return (
    <Container>
      <Content>
        <BiError color="#fff" size={500} />
        <Info>
          <h1>Ocorreu um erro!</h1>
          <h2>
            Parece que você está tentando acessar o site sem rodar o servidor
            local (JSON).
          </h2>
          <p>
            Para que o site funcione é preciso estar com o servidor JSON
            iniciado, para que a aplicação possa buscar da API os dados dos
            produtos e poder carregá-los. Tente executar yarn server na raiz do
            projeto para subir o servidor local.
          </p>
        </Info>
      </Content>
    </Container>
  );
};

export default ErrorPage;
