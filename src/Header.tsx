import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Container>
      <h1>LAS To CSV</h1>
      <h3>Easily Convert well log files to csv</h3>
    </Container>
  );
};
const Container = styled.div`
  align-self: start;
  position: absolute;
  text-align: start;
  top: 5%;
  left: 0;
  right: 0;
  padding: 0 10vw;
  h1 {
    color: #02c885;
    font-weight: 300;
  }
  h3 {
    text-transform: uppercase;
    font-weight: 600;
    color: #2a2a2a;
  }
`;
export default Header;
