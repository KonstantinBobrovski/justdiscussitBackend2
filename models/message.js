module.exports = function (sequelize, DataTypes) {
    let Message = sequelize.define('Message', {
        id: {
            field: 'id',
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        receiverId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        chatId:{
            field: 'id',
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    return Message;
}