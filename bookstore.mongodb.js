use("bookstore");

db.createCollection("books");

db.books.insertMany([
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published: "1925",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published: "1960",
  },
  {
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    genre: "Science",
    published: "1988",
  },
]);

db.books.find({ author: "F. Scott Fitzgerald" });

db.books.find({
  genre: "Science",
});

db.books.updateOne(
  {
    title: "The Great Gatsby",
  },
  {
    $set: { price: "$10" },
  }
);

db.books.updateOne(
  {
    title: "A Brief History of Time",
  },
  {
    $set: { published: "1987" },
  }
);

db.books.deleteOne({
  title: "To Kill a Mockingbird",
});
