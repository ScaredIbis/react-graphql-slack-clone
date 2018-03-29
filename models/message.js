export default (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    text: {
      type: DataTypes.STRING,
    },
  });

  Message.associate = (models) => {
    Message.belongsTo(models.User);
    Message.belongsTo(models.Channel);
  };
  return Message;
};
