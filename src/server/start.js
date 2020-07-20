const app = require('./index')
var port = process.env.PORT || 4040;

app.listen(port, () => {
    console.log(`app listen on port ${port}`);
  });