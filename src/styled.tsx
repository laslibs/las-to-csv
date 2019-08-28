import styled from 'styled-components';

export const DropBox = styled.div`
  padding: 2rem;
  position: relative;
  height: 30vh;
  width: 100%;
  background-color: #02c885;
  color: white;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10vw;
  position: relative;
`;

export const Invisible = styled.input`
  background: red;
  opacity: 0.01;
  position: absolute;
  left: calc(50% - 1.725rem);
  height: 3.5rem;
  width: 3.5rem;
  &:hover + i {
    color: #cfd3cf;
  }
`;
export const Anchor = styled.a`
  margin-top: 2rem;
  color: #02c885;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  & > i {
    font-size: 4.5rem;
    color: #16da98;
  }
  &:hover .down {
    display: flex;
  }
  .down {
    position: absolute;
    background-color: #f7f3f3;
    width: 100%;
    height: 100%;
    display: none;
    align-items: center;
    border-radius: 10px;
    i {
      font-size: 2rem;
      width: 100%;
    }
  }
`;
