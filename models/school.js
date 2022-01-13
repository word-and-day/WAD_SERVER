module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('school', {
        school_id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            unique: true,
            primaryKey: true,
        },
        school_name: {
            type: Datatypes.STRING(30),
        },
    });
};
