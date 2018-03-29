export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('Channel', {
    name: {
      type: DataTypes.STRING,
    },
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Channel.associate = (models) => {
    Channel.belongsTo(models.Team);
  };
  return Channel;
};
