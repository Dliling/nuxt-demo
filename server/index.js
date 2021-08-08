/**
 * @file mock server
 */
const express = require('express');
const path = require('path');

const app = express();

app.all('/demo/*', (req, res) => {
  const urlArr = req.url.split('/');
  const fileName = urlArr[urlArr.length - 1];
  const data = require(path.resolve(__dirname, `./mock/${fileName}.json`));
  res.send({
    code: 200,
    data
  });
});

app.listen(8088, () => {
  console.log('server is running');
});
