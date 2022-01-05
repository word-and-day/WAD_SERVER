module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('teacher', {
        teacher_id: {
            type: Datatypes.STRING(15),
            allowNull: false,
            unique: true,
        },
        password: {
            type: Datatypes.STRING(256),
            allNull: false,
        },
        name: {
            type: Datatypes.STRING(5),
            allNull: false, 
        },
        class_id:{
            type: Datatypes.STRING(8),
            default: false,
        }
    });
};
