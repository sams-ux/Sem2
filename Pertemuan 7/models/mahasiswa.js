const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Mahasiswa = sequelize.define('mahasiswa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },    
    nim: {
        type: DataTypes.STRING,
        allowNull: false
    }    
}, {
    timestamps: false
}); 

module.exports = Mahasiswa;