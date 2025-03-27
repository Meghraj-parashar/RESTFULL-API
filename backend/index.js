import express from 'express';
import cors from 'cors';
const app = express();
const port = 3000;
// app.use(cors("origin","http://localhost:5173/"));
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
  res.json({"Hello": "World'"});
  
});
app.post('/', (req, res) => {
  console.log(req.body);
  res.send('POST request to the homepage');
});








app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});