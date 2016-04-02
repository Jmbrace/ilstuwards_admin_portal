Meteor.methods({
  setRoleOnUser( options ) {
    check( options, {
      user: String,
      role: String
    });

    try {
      console.log("exception");
      console.log(options.user);
      
      Roles.setUserRoles( options.user, [ options.role ] );

    } catch( exception ) {
      return exception;
    }
  }
});