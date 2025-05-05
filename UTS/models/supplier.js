const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.js');

const Supplier = sequelize.define('supplier', {
    idSup: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    namaSupplier: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Perusahaan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    barang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    kuota: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hari: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    
}, {
    tableName: 'supplier',
    timestamps: false, 
});

module.exports = Supplier;