const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('blog_app', 'root', 'root', {
    host: 'localhost',
    dialect:  'mysql'
});
  


const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection Open');
      } catch (error) {
        console.error('Cannot Connect to Database');
      }
}


global.sequelize = sequelize;
module.exports = connectDB;