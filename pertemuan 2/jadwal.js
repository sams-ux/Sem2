const express = require ('express');
const router = express.Router();

//routing
router.get('/:id',(req,res) =>{
    res.send('jadwal id : ${req.params.id}');
});
router.post('/post-jadwal',(req,res) =>{
    res.send("Ini halaman input data jadwal");
});
router.put('/put-jadwal',(req,res) =>{
    res.send("Ini halaman edit data jadwal");
});
router.delete('/delete-jadwal',(req,res) =>{
    res.send("Ini halaman hapus data jadwal");
});

module.exports = router;