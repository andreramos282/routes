import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { SuggestionProvider } from "./context/SuggestionContext";
import Header from "./components/Header";
import Home from "./components/Home";
import Suggestion from "./components/Suggestion";
import History from "./components/History";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #181818;
    font-family: 'Segoe UI', Arial, sans-serif;
    min-height: 100vh;
    color: #fff;
  }
`;

const AppRoot = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const App: React.FC = () => (
  <SuggestionProvider>
    <GlobalStyle />
    <Router>
      <AppRoot>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/palpite" element={<Suggestion />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </Content>
      </AppRoot>
    </Router>
  </SuggestionProvider>
);

export default App;