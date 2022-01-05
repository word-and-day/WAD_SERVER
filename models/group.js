module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('group', {
        group_code: {
            type: Datatypes.STRING(12),
            allowNull: false,
            unique: true,
        },
        group_name: {
            type: Datatypes.STRING(25),
            allNull: false,
        }
    });
};
