const fs = require('fs');
const path = require('path');

// Where to create folders
const basePath = "D:/My Code Base/MERN-2";

// Files content
const htmlContent = "<h1>Hello world</h1>";
const cssContent = "h1 { color: red; }";
const jsContent = 'console.log("Hello world!");';


for (let i = 1; i <= 100; i++) {
    // Creating folder
    const folderName = `day-${i}`;
    const folderPath = path.join(basePath, folderName);
    
    fs.mkdirSync(folderPath);

    // Creating files
    const htmlFile = path.join(folderPath, 'index.html');
    const cssFile = path.join(folderPath, 'style.css');
    const jsFile = path.join(folderPath, 'script.js');

    fs.writeFileSync(htmlFile, htmlContent);
    fs.writeFileSync(cssFile, cssContent);
    fs.writeFileSync(jsFile, jsContent);
}
