import auth
from "../../middleware/auth.js";

import authorize
from "../../middleware/roles.js";

const adminResolver = {

  Query: {

    adminData: async (
      _,
      args,
      { req }
    ) => {

      const user =
        await auth(req);

      authorize(
        "ADMIN"
      )(user);

      return "Sensitive admin data";

    }

  }

};

export default adminResolver;