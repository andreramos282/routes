import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBar = styled.header`
  background: #222;
  color: #fff;
  padding: 18px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  span {
    display: block;
    font-size: 1rem;
    font-weight: normal;
  }
`;

const Nav = styled.nav`
  a {
    color: #fff;
    margin-left: 28px;
    text-decoration: none;
    font-size: 1.1rem;
    &:hover { text-decoration: underline; }
  }
`;

const Header: React.FC = () => (
  <HeaderBar>
    <LogoLink to="/">
      <Logo>
        Fatec
        <span>Jacareí<br />Prof. Francisco de Moura</span>
      </Logo>
    </LogoLink>
    <Nav>
      <Link to="/palpite">Palpite</Link>
      <Link to="/historico">Histórico</Link>
    </Nav>
  </HeaderBar>
);

export default Header;