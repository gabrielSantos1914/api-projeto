Sequelize = require('sequelize');
const sequelize = require('../db/db');

const jwt = require('jsonwebtoken');
const Logins = require('../models/logins');
const Clients = require('../models/clients');

const secretKey = 'chaveSecreta'


module.exports = {

    async create(req, res) {
        try {
            const client = await Clients(sequelize, Sequelize.DataTypes).findOne({
                where: {
                    email: req.body.email,
                    senha: req.body.senha
                }
            }
            )
            if (!client) {
                return res.status(401).send(client).json({
                    message: 'Credenciais inválidas.'
                })
               
            }
            const newLogin = await Logins(sequelize, Sequelize.DataTypes).create({
                email: req.body.email,
                senha: req.body.senha,
                clienteId: client.id
            
            })
            const token = jwt.sign({ id: client.id }, secretKey, { expiresIn: '1h' });

            res.json({ token})


        } catch (err){
            console.log('Erro na consulta do banco de dados: ', err);
            return res.status(500).json({
                message: 'Erro interno do servidor'
            })
        }
    },

    
    async delete(req, res) {
        await Logins(sequelize, Sequelize.DataTypes).destroy
            (
                {
                    where: { id: req.params.id }
                }
            );
        res.status(200).send({ message: "Login excluído com sucesso"})
    }
}


