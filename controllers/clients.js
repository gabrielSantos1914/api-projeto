
const Sequelize = require('sequelize')
const sequelize = require('../db/db');
const Clients = require('../models/clients');
const clients = require('../models/clients');

module.exports = {

    async getAll(req, res) {
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll();
            res.status(200).send(clients)

    },

    async get(req, res) {
        const clients = await Clients(sequelize, Sequelize.DataTypes).findAll({
            where: { id: req.params.id }
        })
        res.status(200).send(clients)
    },

    async create(req, res) {
        const clients = await Clients(sequelize, Sequelize.DataTypes).
            create({
                cpf: req.body.cpf,
                nome_cliente: req.body.nome_cliente,
                telefone: req.body.telefone,
                email: req.body.email,
                cidade: req.body.cidade,
                endereco: req.body.endereco,
                bairro: req.body.bairro,
                complemento: req.body.complemento,
                cep: req.body.cep,
                complemento: req.body.complemento,
                estado: req.body.estado,
            })
        res.status(201).send({
            message: ('cliente cadastrado com sucesso')

        })

    }
}