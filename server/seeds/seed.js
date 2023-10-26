const db = require("../config/connection");
const { User } = require("../models");

const cleanDB = require("./cleanDB");

const userData = require("./user-seed.json");
const bookData = require("./book-seed.json");

db.once("open", async () => {
  // clean database
  await cleanDB("User", "users");

  // bulk create each model
  const users = await User.insertMany(userData);

  for (newBook of bookData) {
    const user = users[Math.floor(Math.random() * users.length)]; // Get the user
    // console.log(user);
    // console.log(newBook);

    user.savedBooks.push(newBook);

    try {
      await user.save(); // Save the modified user back to the database
      console.log("User saved successfully!");
    } catch (error) {
      console.error("Error saving user:", error);
    }

    console.log(user);
  }

  console.log("all done!");
  process.exit(0);
});
