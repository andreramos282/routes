import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSuggestionContext } from "../context/SuggestionContext";
import { generateSuggestion } from "../utils/generateSuggestion";

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

const NumbersRow = styled.div`
  display: flex;
  gap: 14px;
  margin: 18px 0;
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

const Button = styled.button`
  background: #0047ff;
  color: #fff;
  font-size: 1.05rem;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  margin-top: 14px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover { background: #0034b3; }
`;

const Suggestion: React.FC = () => {
  const { addSuggestion } = useSuggestionContext();
  const [suggestion, setSuggestion] = useState<number[]>([]);

  const newSuggestion = () => {
    const s = generateSuggestion();
    setSuggestion(s);
    addSuggestion(s);
  };

  useEffect(() => {
    newSuggestion();
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <Title>Palpite para a Mega-sena</Title>
      <NumbersRow>
        {suggestion.map((n, i) => (
          <Ball key={i}>{n}</Ball>
        ))}
      </NumbersRow>
      <Button onClick={newSuggestion}>Nova sugestão</Button>
    </Card>
  );
};

export default Suggestion;