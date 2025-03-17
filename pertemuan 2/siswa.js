const express = require ('express');
const router = express.Router();

//routing
router.get('/:id',(req,res) =>{
    res.send('siswa id : ${req.params.id}');
});
router.post('/post-siswa',(req,res) =>{
    res.send("Ini halaman input data siswa");
});
router.put('/put-siswa',(req,res) =>{
    res.send("Ini halaman edit data siswa");
});
router.delete('/delete-siswa',(req,res) =>{
    res.send("Ini halaman hapus data siswa");
});

module.exports = router;