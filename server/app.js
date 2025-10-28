const os = require('os');
console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

console.log(os.platform());

const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hello World!'));
const port =8080;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
