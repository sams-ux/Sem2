const express = require ('express');
const app = express();
const port = 3000;
const user = require('./user');
const mapel = require('./mapel');
const siswa = require('./siswa');
const guru = require('./guru');
const kelas = require('./kelas');
const jadwal = require('./jadwal');
const nilai = require('./nilai');
const presensi = require('./presensi');

//menggunakan module
app.use('/user', user);
app.use('/mapel', mapel);
app.use('/siswa', siswa);
app.use('/guru', guru);
app.use('/kelas', kelas);
app.use('/jadwal', jadwal);
app.use('/nilai', nilai);
app.use('/presensi', presensi);

//routing
app.get('/',(rep,res) =>{
    res.send('Ambil data');
});
app.post('/',(rep,res) =>{
    res.send('Kirim data');
});
app.put('/',(rep,res) =>{
    res.send('Edit data');
});
app.delete('/hapus',(rep,res) =>{
    res.send('Hapus data');
});

app.listen(port,()=>{
    console.log('Aplikasi berjalan pada : ${port}');
});