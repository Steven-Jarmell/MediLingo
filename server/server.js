const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors')
const app = express();
mongoose.set('strictQuery', false);
app.use(express.json());
app.use(cors())
const PORT = 3000;

// Define a Mongoose schema for the question data
const questionSchema = new mongoose.Schema({
  questionText: String,
  openEnded: Boolean,
  category: String,
  saveToProfile: Boolean,
  options: [String],
  correctOption: [String],
});

// Define a User schema for question data
const userSchema = new mongoose.Schema({
    fullName: String,
    primaryEmailAddress: {
      address: String,
      verified: Boolean,
    },
    primaryPhoneNumber: {
      number: String,
      verified: Boolean,
    },
    externalAccounts: [
      {
        provider: String,
        externalId: String,
        verified: Boolean,
      },
    ],
  });

// Create a Mongoose model based on the schema
const User = mongoose.model('User', userSchema);
const Questions = mongoose.model('Questions', questionSchema);

// CRUD routes for questions

// Create a new question
app.post('/questions', async (req, res) => {
  try {
    const question = new Questions(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all questions
app.get('/questions', async (req, res) => {
  try {
    const questions = await Questions.find().lean();
    console.log(questions)
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a question by ID
app.get('/questions/:id', async (req, res) => {
  try {
    const question = await Questions.findById(req.params.id);
    if (!question) {
      res.status(404).send('Question not found');
    } else {
      res.status(200).send(question);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a question by ID
app.put('/questions/:id', async (req, res) => {
  try {
    const question = await Questions.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!question) {
      res.status(404).send('Question not found');
    } else {
      res.status(200).send(question);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a question by ID
app.delete('/questions/:id', async (req, res) => {
  try {
    const question = await Questions.findByIdAndDelete(req.params.id);
    if (!question) {
      res.status(404).send('Question not found');
    } else {
      res.status(200).send(question);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
    } catch (err) {
        console.log(err);
    }
}

connectDB()

mongoose.connection.once("open", () => {
	console.log("Connected to MongoDB");
	app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
	console.log(err);
	logEvents(
		`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
		"mongoErrLog.log"
	);
});