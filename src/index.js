const config = require('./config');
const express = require('express');
// const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const movies = require('./routes/movies');
// const cors = require("cors");


const app = express();

const corsOptions ={
  origin:'*', 
  credentials:true,
  optionSuccessStatus:200,
}

mongoose
  .connect(config.database.url, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(error => console.error(`Cannot connect to MongoDB: ${error}`));

// app.use(helmet());
// app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));
app.use('/api/movies/', movies);

app.listen(config.server.port, () => {
  console.log(`Server is running on port: ${config.server.port}`);
});
