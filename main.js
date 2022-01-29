//this is pulling in the express application
const app = require('./app');

//the code below is used to bind and listen the connections on the specified host and port.

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Have fun shopping on port : ${PORT}`);
});
