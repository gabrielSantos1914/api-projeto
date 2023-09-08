//cria o modelo da estrutura da tabela cliente do banco de dados

'use strict' // o strict mode obriga o javacript a mostrar alguns erros que passariam batidos

const { Model, DataTypes } = require('sequelize'); // importa o modelo do sequelize

module.exports = (sequelize, DataTypes) => { //exporta o módulo clients para ser utilizado
    class Logins extends Model {} // define que a classe Clients é estendida do modelo do sequelize

    Logins.init({ //Inicializa a classe Clients passando os dados da tabela criada no Mysql


        email: DataTypes.STRING(50),
        senha: DataTypes.STRING(25),
        clienteId: DataTypes.SMALLINT,
    },
        {
            sequelize, //conexão
            modelName: 'logins',//nome da tabela no Banco de dados
            timestamps: false //desabilita os campos created at e updated at
        });

        return Logins
}