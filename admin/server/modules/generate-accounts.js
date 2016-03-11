let administrators = [
  {
    name: { first: 'Admin', last: 'McAdmin' },
    email: 'admin@admin.com',
    password: 'password'
  }
];


let _createUsers = ( users ) => {
  for ( let i = 0; i < users.length; i++ ) {
    let user       = users[ i ],
        userExists = _checkIfUserExists( user.email );

    if ( !userExists ) {
      let userId  = _createUser( user ),
          isAdmin = _checkIfAdmin( user.email );

      if ( isAdmin ) {
        Roles.setUserRoles( userId, 'admin' );
      } else {
        Roles.setUserRoles( userId, 'employee' );
      }
    }
  }
};


let _checkIfAdmin = ( email ) => {
  return _.find( administrators, ( admin ) => {
    return admin.email === email;
  });
};

Modules.server.generateAccounts = generateAccounts;