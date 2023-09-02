const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const config = require('./libs/config');
let db = null;

module.exports = () => {
  if (!db) {
    const sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config.params
      );
      db = {
        sequelize,
        Sequelize,
        models: {}
      }

      const dir = path.join(__dirname, 'models');

      fs.readdirSync(dir).forEach(file => {
        const modelDir = path.join(dir, file);
        const model = require(modelDir)(sequelize, Sequelize.DataTypes);
        console.log(model);
        db.models[model.name] = model;
      });
      
      Object.keys(db.models).forEach(key => {
        db.models[key].associate(db.models);
      });
  }
  return db;
};
