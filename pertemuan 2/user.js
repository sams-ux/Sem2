const express = require ('express');
const router = express.Router();

//routing
router.get('/:id',(req,res) =>{
    res.send('user id : ${req.params.id}');
});
router.post('/post-user',(req,res) =>{
    res.send("Ini halaman input data user");
});
router.put('/put-user',(req,res) =>{
    res.send("Ini halaman edit data user");
});
router.delete('/delete-user',(req,res) =>{
    res.send("Ini halaman hapus data user");
});

module.exports = router;