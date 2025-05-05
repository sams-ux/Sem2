const express = require('express');
const app = express();
const mahasiswaroute = require('./routes/mahasiswaroute');

app.use(express.json()); //untuk mengambil data json
app.use('/api/mahasiswa', mahasiswaroute);

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});