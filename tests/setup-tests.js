let server;

setup(async function() {
  let students = [
    {"name" : "Steve", "email" : "steve@gmail.com"},
    {"name" : "Tina", "email" : "tina@yahoo.com"}
  ];
  const express = require('express');
  const app = express();
  server = require('http').createServer(app);
  app.set('view engine', 'pug');
  app.use(require('body-parser')
    .urlencoded({extended:true}));
  const studentsController = 
    require("../controllers/students-controller");
  studentsController.setup(app, students);
  await new Promise((resolve, reject) => {
    function onError(err) {
      server.removeListener('listening', onListening);
      reject(err);
    }
    function onListening() {
      server.removeListener('error', onError);
      resolve();
    }
    server.once('error', onError);
    server.once('listening', onListening);
    server.listen(8888);
  });
});

teardown(function() {
  return new Promise((resolve, reject) => {
    server.close(err => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
});
