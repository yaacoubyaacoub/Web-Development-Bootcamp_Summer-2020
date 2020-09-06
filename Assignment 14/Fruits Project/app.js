const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name is specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 4,
  review: "Pretty solid as a fruit."
});

// fruit.save();


const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit."
});

// pineapple.save();

const person = new Person({
  name: "John",
  age: 37
});

// person.save();

const amy = new Person({
  name: "Amy",
  age: 37,
  favoriteFruit: pineapple
});

// amy.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour."
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Weird texture."
});

// Fruit.insertMany([kiwi, orange, banana], function(err) {
//   if(err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

Fruit.find(function(err, fruits) {
  if(err) {
    console.log(err);
  } else {

    mongoose.connection.close();

    // console.log(fruits);
    fruits.forEach(fruit => {
      console.log(fruit.name);
    });
  }
});

/*
Fruit.updateOne({_id: "5f368465edea0133780c2558"}, {name: "Peach"}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});
*/

/*
Fruit.deleteOne({name: "Peach"}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully deleted the document");
  }
});
*/

/*
Person.deleteMany({name: "John"}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully deleted all the documents");
  }
});
*/

/*
const strawberry = new Fruit({
  name: "Strawberry",
  rating: 9,
  review: "Delicious."
});

strawberry.save();

Person.updateOne({name: "John"}, {favoriteFruit: strawberry}, function(err) {
  if(err) {
    console.log(err);
  } else {
    console.log("Successfully updated the document");
  }
});
*/
