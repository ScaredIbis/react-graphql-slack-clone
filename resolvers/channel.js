export default {
  Mutation: {
    createChannel: async (parent, args, { models }) => {
      try {
        await models.Channel.create(args);
        return true;
      } catch (err) {
        console.log('ERROR CREATING CHANNEL: ', err);
        return false;
      }
    },
  },
};
