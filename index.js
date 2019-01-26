const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({
    name: {
      first: 'Jason',
      last: 'Bland'
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
