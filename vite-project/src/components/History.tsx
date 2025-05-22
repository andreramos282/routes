import React from "react";
import styled from "styled-components";
import { useSuggestionContext } from "../context/SuggestionContext";

const Card = styled.div`
  background: #232323;
  border-radius: 12px;
  padding: 36px 30px;
  min-width: 380px;
  box-shadow: 0 2px 24px #0004;
  border: 1px solid #8883;
  margin: 32px auto 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #fff;
  margin-bottom: 18px;
`;

const Row = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 8px;
`;

const Ball = styled.div`
  width: 38px;
  height: 38px;
  background: #28a745;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
  font-weight: bold;
`;

const History: React.FC = () => {
  const { suggestions } = useSuggestionContext();

  return (
    <Card>
      <Title>Palpites</Title>
      {suggestions.length === 0 ? (
        <div>Nenhuma sugestão ainda</div>
      ) : (
        suggestions.map((s, i) => (
          <Row key={i}>
            {s.map((n, j) => (
              <Ball key={j}>{n}</Ball>
            ))}
          </Row>
        ))
      )}
    </Card>
  );
};

export default History;