const express = require("express");
const app = express();

let books = [
  {
    id: "b1",
    title: "Book One",
    description: "Description of book one",
    authorId: "a1",
  },
  {
    id: "b2",
    title: "Book Two",
    description: "Description of book two",
    authorId: "a2",
  },
];

let reviews = [
  { id: "r1", text: "Amazing book!", bookId: "b1" },
  { id: "r2", text: "Decent read.", bookId: "b2" },
];

let authors = [
  { id: "a1", name: "Author One", bio: "Bio of Author One" },
  { id: "a2", name: "Author Two", bio: "Bio of Author Two" },
];

// Your routing and controller code goes here
app.get("/books", (request, response) => {
  response.send(books);
});

app.get("/books/:id", (req, response) => {
  const booksId = req.params.id;
  const selected = books.find((p) => p.id === booksId);
  response.send(selected);
});

app.get("/reviews", (req, response) => {
  response.send(reviews);
});

app.get("/reviews/:id", (req, response) => {
  const reviewsId = req.params.id;
  const selected = reviews.find((p) => p.id === reviewsId);
  response.send(selected);
});

app.get("/authors", (req, response) => {
  response.send(authors);
});

app.get("/authors/:id", (req, response) => {
  const authorsId = req.params.id;
  const selected = authors.find((p) => p.id === authorsId);
  response.send(selected);
});

app.listen(5005, () => {
  console.log("Bookstore app is running on port http://localhost:5005");
});
