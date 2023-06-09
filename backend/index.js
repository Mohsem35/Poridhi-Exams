import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();  
app.use(cors());                                //using cors 
app.use(express.json());                     //use express server to send json

//sudo mysql -u root -proot -h localhost test 

const db = mysql.createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "root",
  database: "test",
});


//API test: localhost:8800/books

app.get("/", (req, res) => {
  res.json("hello");
});

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {                                  // pass the query q here. either return error or data
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

// for post, postman body section json format

app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
  
    const values = [                                // user request inside from body 
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [values], (err, data) => {
      if (err) return res.send(err);
      return res.json(data);
    });
  });


  app.delete("/books/:id", (req, res) => {                  // id wise delete
    const bookId = req.params.id;
    const q = " DELETE FROM books WHERE id = ? ";
  
    db.query(q, [bookId], (err, data) => {                  //db.query here
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.put("/books/:id", (req, res) => {
    const bookId = req.params.id;
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
  
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
  
    db.query(q, [...values,bookId], (err, data) => {        // calling all values of 'values' variable
      if (err) return res.send(err);
      return res.json(data);
    });
  });
  
  app.listen(8800, () => {
    console.log("Connected to backend.");
  });