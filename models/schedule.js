module.exports = (sequelize, Datatypes)=>{
    return sequelize.define('schedule', {
        group_schedule: {
            type: Datatypes.ENUM('Mon','Tue','Wed','Thu','Fri'),
        },
    });
};
