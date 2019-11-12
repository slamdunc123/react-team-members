// SERVER =====

const express = require('express');
// const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

// Bodyparser Middleware (no longer require bodyparser - use express instead)
// app.use(bodyParser.json());
app.use(express.json());

//  DATABASE
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

// ROUTES =====

const members = require('./routes/api/members');
app.use('/api/members', members);

// PRODUCTION =====

// serve static assets
if (process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}
