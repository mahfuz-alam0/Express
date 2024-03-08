const express = require('express');
const cors = require('cors');
const fs = require('fs');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());

// const userData1 = JSON.parse(fs.readFileSync('/user/user.json'));
const userData = [
  {
      "user":"user@gamil.com",
      "pass": "123456"
  }
];

async function run() {
    try {
        app.post('/login', (req, res) => {
            const { user, pass } = req.body;
          
            const foundUser = userData.find(userData => userData.user === user && userData.pass === pass);
          
            if (foundUser) {
              res.json({ message: 'Login successful' });
            } else {
              res.status(401).json({ message: 'Invalid credentials' });
            }
          });
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}

run();

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
