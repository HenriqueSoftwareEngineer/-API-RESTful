/**Importando o Mongoose */
const mongoose = require('mongose');
/**Definindo a URI do Banco de Dados */
const dbURI = process.env.DB_URI || 'mongodb://localhost:27017/minha-api';

/**Função assíncrona que conecta ao Banco de Dados */
const connectDB = async () => {
    try{
        await mongoose.connect(dbURI,{
            /**Usar o novo parser de URL, que é mais flexível */
            userNewUrlParser:true,
            /**Habilita o motor de topologia unificada */
            useUnifiedTopology:true,
        });
        console.log('Banco de Dados conectad com sucesso!')
    }catch(error){
        console.error('Erro ao conectar ao Banco de Dados', error);
        process.exit(1);
    }
};
/**Exportando a função "connectDB" */
module.exports = connectDB;



// require('dotenv').config();
// const mongoose = require('mongoose');

// const uri = process.env.DB_URI; //Acessando a variável DB_URI

// mongoose.connect(uri,{useNewUrlParser:true, useUnifiedTopology:true})
// .then(() => console.log('Conectado ao Banco de Dados'))
// .catch(err => console.error('Erro ao conectar ao Bando de Dados:', err))