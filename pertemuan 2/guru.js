const express = require ('express');
const router = express.Router();

//routing
router.get('/:id',(req,res) =>{
    res.send('guru id : ${req.params.id}');
});
router.post('/post-guru',(req,res) =>{
    res.send("Ini halaman input data guru");
});
router.put('/put-guru',(req,res) =>{
    res.send("Ini halaman edit data guru");
});
router.delete('/delete-guru',(req,res) =>{
    res.send("Ini halaman hapus data guru");
});

module.exports = router;