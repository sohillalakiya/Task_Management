const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

const taskRoutes = require('./router/routes');
app.use('/api', taskRoutes);

mongoose.connect('mongodb+srv://sohil2306:sohilm%402306@cluster0.ot9lq.mongodb.net', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.error(error));



app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`)
})

