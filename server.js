// ===== SERVER =====

const express = require('express');

const app = express();

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// ===== DATABASE =====

const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

mongoose
	.connect(db, {
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => console.log('MongoDB Connected...'))
	.catch(err => console.log(err));
