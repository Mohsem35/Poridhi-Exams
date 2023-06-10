import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";                          // importing axios
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);                       // useState for saving data

  //In React, the useEffect() hook is used to handle side effects in functional components. 
  useEffect(() => {
    const fetchAllBooks = async () => {                         // fetching book using API request useEffect() function
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBooks(res.data);                                         // update books by setter function
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);


  //DELETE method with id
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  
  // Showing all books here by mapping array using unique key id. all books id is different
  return (
    <div>
      <h1>Lama Book Shop</h1>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

      <button className="addHome">
        <Link to="/add" style={{ color: "inherit", textDecoration: "none" }}>
          Add new book
        </Link>
      </button>
    </div>
  );
};

export default Books;