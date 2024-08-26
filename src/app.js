import express from 'express';
import session from 'express-session';
import router from './routes.js';
import mysql from 'mysql2/promise';

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.use('/api', router);


// 配置 session 中间件
app.use(session({
  secret: 'your-secret-key', // 用于签名 session ID 的密钥
  resave: false,             // 是否在每次请求时重新保存 session
  saveUninitialized: true,   // 是否保存未初始化的 session
  cookie: { secure: false }  // 是否仅在 HTTPS 中使用 cookies（在开发过程中可以设置为 false）
}));

// 定义一个路由来设置 session 值
app.get('/set-session', (req, res) => {
  req.session.username = 'JohnDoe'; // 设置 session 值
  res.send('Session value set');
});

// 定义一个路由来获取 session 值
app.get('/get-session', (req, res) => {
  const username = req.session.username; // 获取 session 值
  res.send(`Session value is: ${username}`);
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


const connection = mysql.createPool({
  user: 'leon',
  password: 'leon',
  database: 'music_db',
  host: 'localhost'
})

app.get("/artists", async (req, res) => {

  try {
    const [rows] = await connection.query("SELECT * FROM artist")
    res.json(rows)
  } catch (error) {
    res.status(500).send(error.message)
  }
})


app.get("/artists/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const [rows] = await connection.query("SELECT * FROM artist WHERE id=?", id);
    console.log(rows);
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message)
  }
})


app.get("/artists/:id", async (req, res) => {
  try {
    let id = req.params.id;
    console.log(id);
    const [rows] = await connection.query("SELECT * FROM artist WHERE id=?", id);
    console.log(rows);
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message)
  }
})


app.get("/artist", async (req, res) => {
  try {
    const {name, country, numberOfMemebers, style} = req.body
    console.log(name, country, numberOfMemebers, style)
    
    let id = req.params.id;
    console.log(id);
    const [rows] = await connection.query("SELECT * FROM artist WHERE id=?", id);
    console.log(rows);
    res.json(rows);
  } catch (error) {
    res.status(500).send(error.message)
  }
})