const express = require('express');
const cors = require('cors');
const app = express();


const { students, newStudent } = require('./module')
app.use(cors({
    origin: 'http://localhost:3000',
}));



app.get('/students', (req, res) => {
    res.status(200).json(students);
})

app.post('/students', newStudent);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`LISTION ON ${PORT}`);
})