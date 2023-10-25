const { Books, User } = require("../models");

const resolvers = {
  Query: {
    books: async () => {
      return await Books.find({});
    },
    users: async () => {
      return await User.find({});
    },
  },
};

module.exports = resolvers;
