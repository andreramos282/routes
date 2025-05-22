import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`;

const Card = styled.div`
  background: #232323;
  border-radius: 12px;
  padding: 36px 30px;
  min-width: 320px;
  box-shadow: 0 2px 24px #0004;
  border: 1px solid #8883;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background: #0047ff;
  color: #fff;
  font-size: 1.1rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  margin-top: 18px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #0034b3; }
`;

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <Card>
        <Title>Bem-vindo!</Title>
        <Button onClick={() => navigate("/palpite")}>Clique para começar</Button>
      </Card>
    </Main>
  );
};

export default Home;