const express = require('express');
const app = express();

const path = require('path');

app.get('/', (req, res) => {

    res.sendFile( path.join(__dirname, '../.vscode/index.html') );
    res.sendFile( path.join(__dirname, '../.vscode/styles.css') );

})



const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log(`Server breathing on ${port}`)
})

