import React, { useState } from "react";

const FileUploadForm = () => {
  const [selectedFile, setSelectedFile]: [File[], React.Dispatch<React.SetStateAction<never[]>>] = useState([]);

  const handleFileSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFile(Array.from(e.target.files));
    console.log(`${typeof selectedFile} selected: ${selectedFile[0]}`);
  };

  const handleSubmit = () => {
    alert(
      `${typeof selectedFile} selected: ${
        selectedFile[0]
      } submitted successfully`
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileSelected} />
        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default FileUploadForm;
