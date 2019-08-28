import React, { useState } from 'react';
import { Las } from 'las-js';
import { Icon, Checkbox } from 'antd';
import { Container, DropBox, Invisible, Anchor } from './styled';
import Header from './Header';

const App: React.FC = () => {
  const [download, setDownload] = useState('');
  const [filename, setfilename] = useState('file');
  const [check, setCheck] = useState(false);
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
    let url: File;
    if (check) {
      console.log(check);
      url = (await myLas.toCsvStripped()) as File;
    } else {
      console.log(check);
      url = (await myLas.toCsv()) as File;
    }
    const downloadLink = URL.createObjectURL(url);
    setfilename(file.name.split('.')[0]);
    setDownload(downloadLink);
    // URL.revokeObjectURL(downloadLink);
  };
  return (
    <main>
      <Container>
        <Header />
        <DropBox
          id="output"
          onDragEnter={stopEvent}
          onDragOver={stopEvent}
          onDrop={e => processEvent(e)}
        >
          <Invisible
            type="file"
            name=""
            id=""
            onChange={e => processEvent(e)}
          />
          <Icon type="inbox" style={{ fontSize: '3.5rem' }} />

          <p>CLICK TO UPLOAD OR DROP FILE HERE</p>
          <div className="check">
            <Checkbox
              style={{ color: 'white', fontWeight: 500 }}
              checked={check}
              onChange={() => setCheck(!check)}
            >
              Remove Null Values
            </Checkbox>
          </div>
        </DropBox>
        {!!download ? (
          <Anchor href={download} download={`${filename}.csv`}>
            <Icon type="file-done" />
            {`${filename}.csv`}
            <div
              className="down"
              onClick={() => {
                setDownload(pre => {
                  URL.revokeObjectURL(pre);
                  return '';
                });
              }}
            >
              <Icon type="download" />
            </div>
          </Anchor>
        ) : (
          <p></p>
        )}
      </Container>
    </main>
  );
};

export default App;
