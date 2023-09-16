const express = require('express');
const mongoose = require('mongoose');
const app = express();
mongoose.set('strictQuery', false);
app.use(express.json());
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

// Create a Mongoose model based on the schema
const Question = mongoose.model('Question', questionSchema);

// CRUD routes for questions

// Create a new question
app.post('/questions', async (req, res) => {
  try {
    const question = new Question(req.body);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all questions
app.get('/questions', async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a question by ID
app.get('/questions/:id', async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
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
    const question = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
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
    const question = await Question.findByIdAndDelete(req.params.id);
    if (!question) {
      res.status(404).send('Question not found');
    } else {
      res.status(200).send(question);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://boss:boss@pitt2023.61dxycp.mongodb.net/?retryWrites=true&w=majority');
    app.listen(PORT, () => {
      console.log(`Server is Successfully Running, and App is listening on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error occurred, server can\'t start', error);
  }
};

start();
