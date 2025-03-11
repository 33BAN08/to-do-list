const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');
const app = express();
app.use(cors());    
app.use(express.json());
const dburl='mongodb+srv://wanij63673:rootbou1@todos.lc5mi.mongodb.net/?retryWrites=true&w=majority&appName=todos';
mongoose.connect(dburl)
    .then(() => console.log("✅ Connected to Mongo Atlass"))
    .catch(err => console.error("❌ MongoDB connection error:", err));
app.get('/get', (req, res) => {
    TodoModel.find({})
        .then(todos => res.json(todos))
        .catch(err => res.json(err));

})
    app.post('/add', (req, res) => {
    const task = req.body.task;
   TodoModel.create({task: task})
    .then(todo => res.json(todo))
    .catch(err => res.json(err));
}); 
app.put('/update/:id', (req, res) => {
    const {id} = req.params;
    console.log(id)
      })
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
