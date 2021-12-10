const {sequelize, DataTypes, Model} = require('./db')

class Cast extends Model {}

Cast.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING
}, {
    sequelize,
    timestamps: false
})

module.exports = {Cast}