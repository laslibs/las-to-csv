import React, { useState } from 'react';
import { Las } from 'las-js';
import styled from 'styled-components';
import { Icon } from 'antd';

const App: React.FC = () => {
  const [download, setDownload] = useState('');
  const [filename, setfilename] = useState('file');
  const stopEvent = (event: any) => {
    event.stopPropagation();
    event.preventDefault();
  };
  const processEvent = (event: any) => {
    stopEvent(event);
    if (event.dataTransfer) {
      readLas(event.dataTransfer.files[0] as File);
    } else {
      readLas(event.target.files[0] as File);
    }
  };
  const readLas = async (file: File) => {
    const myLas = new Las(file);
    const url = await myLas.toCsvStripped();
    const downloadLink = URL.createObjectURL(url);
    setfilename(file.name.split('.')[0]);
    setDownload(downloadLink);
    // URL.revokeObjectURL(downloadLink);
  };
  return (
    <Container>
      <DropBox
        id="output"
        onDragEnter={stopEvent}
        onDragOver={stopEvent}
        onDrop={e => processEvent(e)}
      >
        <Invisible type="file" name="" id="" onChange={e => processEvent(e)} />
        <Icon type="inbox" style={{ fontSize: '3.5rem' }} />

        <p>CLICK TO UPLOAD OR DROP FILES HERE</p>
      </DropBox>
      {!!download ? (
        <Anchor href={download} download={`${filename}.csv`}>
          <Icon type="file-done" />
          {`${filename}.csv`}
          <div className="down">
            <Icon type="download" />
          </div>
        </Anchor>
      ) : (
        <p></p>
      )}
    </Container>
  );
};
const DropBox = styled.div`
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
const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 10vw;
`;

const Invisible = styled.input`
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
const Anchor = styled.a`
  margin-top: 2rem;
  color: #02c885;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  position: relative;
  & > i {
    font-size: 3.5rem;
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

export default App;
