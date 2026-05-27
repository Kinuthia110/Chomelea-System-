import auth from "../../middleware/auth.js";

const meResolver = {

  Query: {

    me: async (_, args, { req }) => {

      const user =
        await auth(req);

      return user;

    }

  }

};

export default meResolver;