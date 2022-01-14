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

db.Teacher.hasOne(db.User);
db.User.belongsTo(db.Teacher);

db.Group.hasOne(db.User);
db.User.belongsTo(db.Group);

db.Schedule.hasOne(db.Group);
db.Group.belongsTo(db.Schedule);

db.School.hasOne(db.Group);
db.Group.belongsTo(db.School);

db.Group.hasOne(db.Text);
db.Text.belongsTo(db.Group);

db.User.hasOne(db.Text);
db.Text.belongsTo(db.User);

db.School.hasOne(db.Teacher);
db.Teacher.belongsTo(db.School);

db.Group.hasOne(db.Teacher);
db.Teacher.belongsTo(db.Group);

module.exports = db;