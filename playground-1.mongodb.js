// create a new database
use("testdb");

// create a new collection (folder)
db.createCollection("books");

/*
    mongodb
    db -> db
    collection -> table
    document -> row
    fields in document -> column
*/

// add one new data
db.books.insertOne({
  title: "Book 1",
  description: "Very interesting",
  genre: "comedy",
});

/*
    CRUD - 
    Create, Read, Update, Delete
*/

// Create
// insert multiple documents at one shot
db.books.insertMany([
  {
    title: "Book 2",
    description: "this about book 2 - very scary",
    genre: "horror",
  },
  {
    title: "Book 3",
    description: "this about book 3",
    genre: "sci-fi",
  },
  {
    title: "Book 4",
    description: "very funny",
    genre: "comedy",
  },
]);

// Update
/*
    we want to change "Book 3" > "Book Three"
    1. find the books with title of "Book 3"
    2. update the books you found with the updated title ("Book Three") 

    $set will create the value if not exists.
    If exists, then it will update.
*/
db.books.updateOne(
  {
    title: "Book 3", // find the book with the title of "Book 3"
  },
  {
    $set: {
      title: "Book Three", // update the title to "Book Three"
    },
  }
);

// update by ID
db.books.updateOne(
  {
    _id: ObjectId("68940c06843bab0ac59cbe51"), // target by id
  },
  {
    $set: { title: "Book Four" },
  }
);

// update multiple documents at one go
db.books.updateMany(
  {
    genre: "comedy", // target all the books with genre comedy
  },
  {
    $set: { rating: 4 }, // update or add a rating field
  }
);

// Delete
// delete by ID
db.books.deleteOne({
  _id: ObjectId("689405f73348a8952bf3a4f7"),
});

// Read
/*
  retrieve data
  filter data  
*/
// retrieve all the books
db.books.find();

// filter by genre: comedy (.filter)
db.books.find({ genre: "comedy" });

// find one book with genre: comedy (.find)
db.books.findOne({ genre: "comedy" });

// find all the books with rating more than 5
db.books.find({
  rating: { $gt: 5 }, // greater than
});
// find all the books with rating less than 5
db.books.find({
  rating: { $lt: 5 }, // less than
});

// find all the books with rating than is bigger than 5 but smaller than 6
db.books.find({
  rating: {
    $gt: 3,
    $lt: 6,
  }, // in between 3 - 6
});
