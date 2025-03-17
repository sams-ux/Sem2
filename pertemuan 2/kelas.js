const express = require ('express');
const router = express.Router();

//routing
router.get('/:id',(req,res) =>{
    res.send('kelas id : ${req.params.id}');
});
router.post('/post-kelas',(req,res) =>{
    res.send("Ini halaman input data kelas");
});
router.put('/put-kelas',(req,res) =>{
    res.send("Ini halaman edit data kelas");
});
router.delete('/delete-kelas',(req,res) =>{
    res.send("Ini halaman hapus data kelas");
});

module.exports = router;