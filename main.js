//this is pulling in the express application
const app = require('./app');
//export NODE_OPTIONS = --openssl - legacy - provider;

//the code below is used to bind and listen the connections on the specified host and port.
try {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Have fun shopping on port : ${PORT}`);
  });
} catch(err) {
  console.log(err)
}