export default (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: 'Username can only contain letters and numbers',
        },
        len: {
          args: [3, 25],
          msg: 'Username must be between 3 and 25 characters long',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email address',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
    },
  });

  User.associate = (models) => {
    User.belongsToMany(models.Team, {
      through: 'members',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
    User.belongsToMany(models.Channel, {
      through: 'channel_members',
      foreignKey: {
        name: 'userId',
        field: 'user_id',
      },
    });
  };
  return User;
};
