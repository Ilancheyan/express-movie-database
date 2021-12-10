const {sequelize, DataTypes, Model} = require('./db')
//import models
const { Movie } = require('./model/movie')
const { Cast } = require('./model/cast')

//associate models
//adds foreign key to cast table connecting a cast instance to a specific movie
Cast.belongsTo(Movie)
//gives us sequelize methods for a one to many relationship
Movie.hasMany(Cast)

//export models with added associations
module.exports = {Movie, Cast, sequelize}