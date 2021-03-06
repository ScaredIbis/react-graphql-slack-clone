export default (sequelize, DataTypes) => {
  const Channel = sequelize.define('channel', {
    name: {
      type: DataTypes.STRING,
    },
    public: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  });

  Channel.associate = (models) => {
    Channel.belongsTo(models.Team, {
      foreignKey: {
        name: 'teamId',
        field: 'team_id',
      },
    });
    Channel.belongsToMany(models.User, {
      through: 'channel_members',
      foreignKey: {
        name: 'channelId',
        field: 'channel_id',
      },
    });
  };
  return Channel;
};
