"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FileUploadForm = function () {
    var _a = react_1.useState([]), selectedFile = _a[0], setSelectedFile = _a[1];
    var handleFileSelected = function (e) {
        setSelectedFile(Array.from(e.target.files));
        console.log(typeof selectedFile + " selected: " + selectedFile[0]);
    };
    var handleSubmit = function () {
        alert(typeof selectedFile + " selected: " + selectedFile[0] + " submitted successfully");
    };
    return (<>
      <form onSubmit={handleSubmit}>
        <input type="file" accept=".pdf" onChange={handleFileSelected}/>
        <input type="submit" value="submit"/>
      </form>
    </>);
};
exports["default"] = FileUploadForm;
