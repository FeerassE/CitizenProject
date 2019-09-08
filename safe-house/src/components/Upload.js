import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import axios from 'axios';

function postFileData(uploadData){
  console.log(uploadData);

  axios.post('http://localhost:8080/post',{
    data: { hello: "world"}
  });
}

function Basic(props) {

    const onDrop = useCallback(acceptedFiles => {
        const reader = new FileReader()

        reader.onabort = () => console.log('file reading was aborted')
        reader.onerror = () => console.log('file reading has failed')
        reader.onload = () => {
            const uploadData = reader.result;
            setData(uploadData);
        }

        acceptedFiles.forEach(file => reader.readAsText(file))

    }, [])

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({onDrop});
    
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    const [data, setData] = useState("");


    return (
      <section className="upload">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <button className="upload-button">Upload</button>
        </div>
        <div className="send">
          <button className="send-button" onClick={() => postFileData(data)}>Send</button>
        </div>
        <aside className="files">
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    );
  }
  
  export default Basic;