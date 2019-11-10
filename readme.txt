SERVER

set up npm
- npm init -y

create new directory in project folder and cd into new folder
- mkdir react-express
- cd react-express

install dependencies
- npm install express concurrently
- npm install nodemon --save-dev

add scripts to package.json
- 	"start": "node server.js", "server": "nodemon server.js"

create server.js file
- touch server.js
- add the basic code
    const express = require('express');

    const app = express();

    const port = 5000;

    app.listen(port, () => console.log(`Server started on post ${port}`));


create local .json file
- touch customers.json

run server
- npm run server

===============================================================================
CLIENT

create client app and cd into new folder
- create-react-app client
- cd client

run client
- npm start

create components folders
- src/components/customers
- src/components/customers/views
- src/components/customers/layouts
- src/components/customers/partials

clean up app
- remove refs to logo.svg

create customers component
- customers.js
- customers.css

install router
- npm i react-router-dom

install axios into client folder
- npm install axios

install reactstrap and bootstrap into client folder
- npm install reactstrap bootstrap

install sass into client folder
- npm install node-sass

create proxy line in client package.json
- "proxy": "http://localhost:5000",


===============================================================================
OPTIONAL 

concurrently set up in server package.json
- "client": "npm start --prefix client",
- "dev": "concurrently \"npm run server\" \"npm run client\""

run server and client
- npm run dev

===============================================================================
GIT

remove git file from client folder
- cmd + shift + .
- delete git

set up git in main app folder
- add .gitignore file - /node_modules
- git init
- git status
- git add .
- git status
- git commit -m 'intial commit'

create git respository on github
- copy code to git push

===============================================================================
DATABASE

install mongoose
- npm install mongoose

create db credentials folder/file
- /config/keys.js

add db connection string
- eg:
module.exports = {
  mongoURI:
    'mongodb+srv://admin:6QLK56OWsIXgDPs8@cluster0-mjhqv.mongodb.net/cjm?retryWrites=true'
};







		