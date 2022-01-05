module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('user', {
        user_id: {
            type: Datatypes.STRING(45),
            allowNull: false,
            unique: true,
        },
        password: {
            type: Datatypes.STRING(256),
            allNull: false,
        },
        name: {
            type: Datatypes.STRING(45),
            allNull: false, 
        },
        is_teacher:{
            type: Datatypes.STRING(5),
            defaultValue: 'false',
        },
    });
};
