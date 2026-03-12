require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String
});
app.post("/signup", async (req, res) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      return res.send("Email already registered");
    }

    const user = new User(req.body);
    await user.save();

    res.send("User registered successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/login", async (req, res) => {

  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

  if (user) {
    res.send("Login successful");
  } else {
    res.send("Invalid email or password");
  }

});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});