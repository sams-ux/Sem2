const express = require ('express');
const router = express.Router();

//routing
router.get('/:id',(req,res) =>{
    res.send('mapel id : ${req.params.id}');
});
router.post('/post-mapel',(req,res) =>{
    res.send("Ini halaman input data mapel");
});
router.put('/put-mapel',(req,res) =>{
    res.send("Ini halaman edit data mapel");
});
router.delete('/delete-user',(req,res) =>{
    res.send("Ini halaman hapus data mapel");
});

module.exports = router;