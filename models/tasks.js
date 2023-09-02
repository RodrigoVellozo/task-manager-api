module.exports = (sequelize, DataTypes) => {
  const Tasks = sequelize.define("Tasks", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  }); 
  Tasks.associate = (models) => {
    Tasks.belongsTo(models.Users);
  };
  return Tasks;
};
