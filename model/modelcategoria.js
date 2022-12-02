const Sequelize = require('sequelize');

const connection = require('../database/database');

const modelCategoria = connection.define(
    'tb_categoria',
    {
        id_categoria:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        nome_categoria:{
            type: Sequelize. STRING(100),
            allowNull: false
        }
    }
);

//modelCategoria.sync({force:true});

module.exports = modelCategoria;