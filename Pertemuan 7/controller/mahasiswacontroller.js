const express = require('express');
const router = express.Router();
const Mahasiswa = require('../models/mahasiswa');
const { where } = require('sequelize');

// Get all mahasiswa
router.get('/', async (req, res) => {
    const mahasiswa = await Mahasiswa.findAll();
    res.json(mahasiswa);
});

// Get mahasiswa by id
router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const mahasiswa = await Mahasiswa.findByPk(req.params.id);
    if (mahasiswa) {
        res.json(mahasiswa);
    } else {
        res.status(404).json({error: 'Mahasiswa not found'});
    }
});

// Create a new mahasiswa
router.post('/', async (req, res) => {
    const {nama, nim, jurusan } = req.body;
    try {    
        const mahasiswa = await Mahasiswa.create({ nama, nim, jurusan });
        res.status(201).json(mahasiswa);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

// Put Update mahasiswa
router.put('/:id', async (req, res) => {
    const {id} = req.params;
    const {nama, nim, jurusan } = req.body;
    try {
        const mahasiswa = await Mahasiswa.update(
        {nama, nim, jurusan},
        {where: {id}}
        );
        res.json({message: 'Mahasiswa updated',update});
    }catch (error) {
        res.status(400).json({error: error.message});
    }
});

// Delete mahasiswa
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    try {
        await Mahasiswa.destroy({where: {id}});
        res.json({message: 'Mahasiswa deleted'});   
    } catch (error) {
        res.status(400).json({error: error.message});
    }
});

module.exports = router;
