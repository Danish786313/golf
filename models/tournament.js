'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tournament extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Course, {foreignKey: 'course_id'})
      this.belongsTo(models.Category, {foreignKey: 'category_id'})
    }
  }
  Tournament.init({
    course_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    venue: DataTypes.STRING,
    bet_amount: DataTypes.DECIMAL,
    winner: DataTypes.STRING,
    no_of_players: DataTypes.INTEGER,
    no_of_rounds: DataTypes.INTEGER,
    types_of_holes: DataTypes.INTEGER,
    start_date: DataTypes.STRING,
    end_date: DataTypes.STRING,
    registration_start_date: DataTypes.STRING,
    registration_end_date: DataTypes.STRING,
    max_players: DataTypes.INTEGER,
    betting_type: DataTypes.STRING,
    tournament_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tournament',
  });
  return Tournament;
};