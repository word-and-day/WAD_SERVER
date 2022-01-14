module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('text', {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        text: {
            type: Datatypes.STRING(256),
        },
    });
};
