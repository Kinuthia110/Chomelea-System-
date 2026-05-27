const authorize = (...roles) => {

  return (user) => {

    if (!user) {

      throw new Error(
        "Unauthorized"
      );

    }

    if (
      !roles.includes(user.role)
    ) {

      throw new Error(
        "Access denied"
      );

    }

    return true;

  };

};

export default authorize;