const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return await User.find({});
    },
    user: async (parent, { username }) => {
      return await User.findOne({ username });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw AuthenticationError;
      }
      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      const token = signToken(user);
      return { token, user };
    },
    removeBook: async (parent, { bookId }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    addBook: async (parent, { bookId, title, description, authors, image, link }, context) => {
        if (context.user) {  
        return User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: { bookId, title, description,authors, image, link } } },
            { new: true }
          );
        }
        throw AuthenticationError;
      },
    // --working without context
    // removeBook: async (parent, { username, bookId }) => {
    //     return User.findOneAndUpdate(
    //       { username },
    //       { $pull: { savedBooks: { bookId: bookId } } },
    //       { new: true }
    //     );
    //   },
    // addBook: async (parent, { username, bookId, title, description,authors, image, link }) => {
    //     return User.findOneAndUpdate(
    //       { username },
    //       { $addToSet: { savedBooks: { bookId, title, description,authors, image, link } } },
    //       { new: true }
    //     );
    // },
  },
};

module.exports = resolvers;
