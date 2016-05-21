
Meteor.publish( 'users', function() {
  let isAdmin = Roles.userIsInRole( this.userId, 'admin' );

  if ( isAdmin ) {
    return [
      Meteor.users.find( {}, { fields: { "emails.address": 1, "roles": 1 } } ),
      Invitations.find( {}, { fields: { "email": 1, "role": 1, "date": 1 } } ),
      BFBLmember.find ( {},  { fields: {"name" : 1, "user": 1} } )
    ];
  } else {
    return null;
  }
});