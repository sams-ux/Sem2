const Supplier = require('../models/supplier');

// GET semua atau satu Supplier
const get = async (req, res) => {
    try {
        if (req.params.id) {
            const supplier = await Supplier.findByPk(req.params.id);
            if (supplier) {
                res.json(supplier);
            } else {
                res.status(404).json({ message: 'Supplier not found' });
            }
        } else {
            const suppliers = await Supplier.findAll();
            res.json(suppliers);
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// POST - buat Supplier baru
const post = async (req, res) => {
    const { idSupplier, namaSupplier, Perusahaan, barang, kuota, hari } = req.body;
    try {
        const supplier = await Supplier.create({ idSupplier, namaSupplier, Perusahaan, barang, kuota, hari });
        res.status(201).json(supplier);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// PUT - update Supplier berdasarkan idSupplier
const put = async (req, res) => {
    const idSup = req.params.id;
    const { namaSupplier, Perusahaan, barang, kuota, hari } = req.body;

    try {
        const [updated] = await Supplier.update(
            { namaSupplier, Perusahaan, barang, kuota, hari },
            { where: { idSup } }
        );

        if (updated) {
            res.json({ message: 'Supplier updated successfully' });
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// DELETE - hapus Supplier berdasarkan idSupplier
const del = async (req, res) => {
    const idSupplier = req.params.id;
    try {
        const supplier = await Supplier.findByPk(idSupplier);
        if (supplier) {
            await supplier.destroy();
            res.json({ message: 'Supplier deleted successfully' });
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { get, post, put, delete: del };
