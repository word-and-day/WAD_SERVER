const path = require('path');
const Sequelize = require ('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..','config', 'config.json'))[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Group = require("./group")(sequelize, Sequelize);
db.Schedule = require("./schedule")(sequelize, Sequelize);
db.School = require("./school")(sequelize, Sequelize);
db.Teacher = require("./teacher")(sequelize, Sequelize);
db.Text = require("./text")(sequelize, Sequelize);
db.User = require("./user")(sequelize, Sequelize);

db.User.hasOne(db.Group);
db.Group.belongsTo(db.User);

db.User.hasOne(db.School);
db.School.belongsTo(db.User);

db.User.hasMany(db.Text);
db.Text.belongsTo(db.User);

db.Group.hasOne(db.Teacher);
db.Teacher.belongsTo(db.Group);

db.Group.hasOne(db.School);
db.School.belongsTo(db.Group);

db.Teacher.hasOne(db.School);
db.School.belongsTo(db.Teacher);

db.Schedule.hasOne(db.Group);
db.Schedule.belongsTo(db.Schedule);

module.exports = db;