export default (sequelize, DataTypes) => {
  const Message = sequelize.define('message', {
    text: {
      type: DataTypes.STRING,
    },
  });

  Message.associate = (models) => {
    Message.belongsTo(models.User, {
      name: 'userId',
      field: 'user_id',
    });
    Message.belongsTo(models.Channel, {
      name: 'channelId',
      field: 'channel_id',
    });
  };
  return Message;
};
