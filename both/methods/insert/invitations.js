Meteor.methods({
  sendInvitation( invitation ) {
    check( invitation, {
      email: String,
      role: String
    });

    try {
      var token = Random.hexString( 16 );
      console.log(token);
      Modules.server.sendInvitation({
        email: invitation.email,
        token:  token,
        role: invitation.role,
        date: ( new Date() ).toISOString()
      });
    } catch( exception ) {
      return exception;
    }
  }
});