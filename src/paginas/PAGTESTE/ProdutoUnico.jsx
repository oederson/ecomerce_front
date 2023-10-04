import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  padding: 10px 20px;

  a {
    color: #333;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
  }

  .active {
    color: #000;
  }
`;

const Home = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #000;
  }
`;

const About = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #000;
  }
`;

const Contact = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 16px;
  font-weight: 600;
  &:hover {
    color: #000;
  }
`;

export default () => (
  <Navbar>
    <Home href="/">Home</Home>
    <About href="/about">About</About>
    <Contact href="/contact">Contact</Contact>
  </Navbar>
);