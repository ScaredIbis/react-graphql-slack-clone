import bcrypt from 'bcrypt';
import _ from 'lodash';

const formatErrors = (e, models) => {
  if (e instanceof models.sequelize.ValidationError) {
    return e.errors.map(err => _.pick(err, ['path', 'message']));
  }
  return [{ path: 'name', message: 'something went wrong' }];
};

export default {
  Query: {
    getUser: (parent, { id }, { models }) => models.User.findOne({ where: { id } }),
    allUsers: (parent, args, { models }) => models.User.findAll(),
  },
  Mutation: {
    register: async (parent, { password, ...otherArgs }, { models }) => {
      console.log('in the register function');
      try {
        if (password.length < 5) {
          return {
            ok: false,
            errors: [{
              path: 'password',
              message: 'Password must be at least 5 characters long',
            }],
          };
        }
        const hashedPW = await bcrypt.hash(password, 12);
        const user = await models.User.create({ ...otherArgs, password: hashedPW });
        return {
          ok: true,
          user,
        };
      } catch (err) {
        console.log('ERROR REGISTERING USER: ', err);
        return {
          ok: false,
          errors: formatErrors(err, models),
        };
      }
    },
  },
};
