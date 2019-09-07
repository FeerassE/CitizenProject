import React from 'react';
import {useDropzone} from 'react-dropzone';

function Basic(props) {
    const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
    
    const files = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));
  
    return (
      <section className="upload">
        <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <h1 className="upload-button">Upload</h1>
        </div>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </section>
    );
  }
  
  export default Basic;