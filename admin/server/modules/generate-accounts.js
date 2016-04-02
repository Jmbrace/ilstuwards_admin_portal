let administrators = [
  {
    name: { first: 'Admin', last: 'McAdmin' },
    email: 'admin@admin.com',
    password: 'password'
  }
];

let generateAccounts = () => {
  let fakeUserCount = 5,
      usersExist    = _checkIfAccountsExist( administrators.length + fakeUserCount );

  if ( !usersExist ) {
    _createUsers( administrators );
    _createUsers( _generateFakeUsers( fakeUserCount ) );
  }
};

let _checkIfAccountsExist = ( count ) => {
  let userCount = Meteor.users.find().count();
  return userCount < count ? false : true;
};

let _createUsers = ( users ) => { // passes an array of user Objects
  for ( let i = 0; i < users.length; i++ ) {
    let user       = users[ i ], //specific user id
        userExists = _checkIfUserExists( user.email ); // boolean if it exists in user collection

    if ( !userExists ) { // if new user
      let userId  = _createUser( user ), // call create single user object
          isAdmin = _checkIfAdmin( user.email ); //

      if ( isAdmin ) {
        Roles.setUserRoles( userId, 'admin' );
      } else {
        console.log("Go in here?");
        Roles.setUserRoles( userId, 'farm');
      }
    }
  }
};

let _checkIfUserExists = ( email ) => {
  return Meteor.users.findOne( { 'emails.address': email } );
};

let _createUser = ( user ) => {
  console.log();
  let userId = Accounts.createUser({
    email: user.email,
    password: user.password,
    profile: {
      name: user.name
    }
  });
  return userId;
};

let _checkIfAdmin = ( email ) => {
  return _.find( administrators, ( admin ) => {
    return admin.email === email;
  });
};

let _generateFakeUsers = ( count ) => {
  let users = [];

  for ( let i = 0; i < count; i++ ) {
    users.push({
      name: { first: faker.name.firstName(), last: faker.name.lastName() },
      email: faker.internet.email(),
      password: 'password'
    });
  }

  return users;
};

Modules.server.generateAccounts = generateAccounts;