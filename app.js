const chalk = require('chalk');
const express = require('express');

const phRank = express();

phRank.get('/', function(req, res) {
  res.send('This is not the app you are looking for..');
});

phRank.listen(1337, function(){
  console.log(chalk.red('Nothing to see here, move along folks.'))
});
