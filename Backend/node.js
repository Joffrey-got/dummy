const express = require('express');
const app = express();
app.use(express.json());
app.get('/sum-server', (req, res) => {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a+b;
    res.send(""+sum);
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
})
