const db  = require('../configs/db');

// Ambil semua mahasiswa
exports.getMahasiswa = (req, res) => {
    db.query('SELECT * FROM mahasiswa', (err, results) => {
        if(err) throw err;
        res.json(results);
    });
};

// Ambil mahasiswa berdasarkan ID
exports.getMahasiswaById = (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM mahasiswa WHERE id = ?', [id], (err, results) => {
        if(err) throw err;
        if (results.length === 0) {
            return res.status(404).json({ message: 'Mahasiswa tidak ditemukan' });
        }
        res.json(results[0]);
    });
};

// Tambah data mahasiswa
exports.createMahasiswa = (req, res) => {
    const { nama, nim, jurusan } = req.body;
    db.query(
        'INSERT INTO mahasiswa (nama, nim, jurusan) VALUES (?, ?, ?)',
        [nama, nim, jurusan],
        (err, results) => {
            if(err) throw err;
            res.json({ id: results.insertId, nama, nim, jurusan });
        }
    );
};

// Update data mahasiswa
exports.updateMahasiswa = (req, res) => {
    const id = req.params.id;
    const { nama, nim, jurusan } = req.body;
    db.query(
        'UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?',
        [nama, nim, jurusan, id],
        (err, results) => {
            if(err) throw err;
            res.json({ id, nama, nim, jurusan });
        }
    );
};

// Hapus data mahasiswa
exports.deleteMahasiswa = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err, results) => {
        if(err) throw err;
        res.json({ message: 'Mahasiswa deleted successfully' });
    });
};
