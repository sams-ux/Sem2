const express = require ('express');
const router = express.Router();

//routing
router.get('/:id',(req,res) =>{
    res.send('presensi id : ${req.params.id}');
});
router.post('/post-presensi',(req,res) =>{
    res.send("Ini halaman input data presensi");
});
router.put('/put-presensi',(req,res) =>{
    res.send("Ini halaman edit data presensi");
});
router.delete('/delete-presensi',(req,res) =>{
    res.send("Ini halaman hapus data presensi");
});

module.exports = router;