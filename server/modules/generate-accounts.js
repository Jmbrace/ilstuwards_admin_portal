let administrators = [
  {
    name: { first: 'Admin', last: 'McAdmin' },
    email: 'admin@admin.com',
    password: 'password'
  }
];

let generateAccountsBFBL = () => { //convert BFBL members to users
  var userCount = Meteor.users.find().count();
  if(userCount > 0){
    console.log("Users already added.");
  }
  else
  {

    _createUsers( administrators );

    var bfblCursor = BFBL.find({});
    bfblCursor.forEach(function(member){

      //run through bfbl collection and create users based off name/email
      var name = member.business + member.name + member.city + '_' + member.category;
      var username = name.split(' ').join('_');
      let usernameExists = _checkIfUsernameExists (username);
      let emailExists = _checkIfUserEmailExists( member.email );
      let multEmails = member.email.split(' ')
      console.log('email' + member.email); 

      if( !usernameExists ){
        let userID = null;
        if(!emailExists){
          userId = Accounts.createUser({ 
          username: username, 
          email: member.email,
          password: 'password',
          profile: {

         },
        }); 
        }
        else if( emailExists ){
          console.log("email exists" + member.email);

          userId = Accounts.createUser({ 
          username: username, 
          password: 'password',
          profile: {

         },
        }); 
        }
        Meteor.users.update( userId  , { $set: {
          isVerified: true}
        });
        console.log("User added:" + username);
        Roles.setUserRoles( userId, 'farm'); 
      }
      else{
        console.log("User rejected : " + username);
      }
      //add fk to bfbl

    }, function(error){
      if(error) throw error;
    });
  }
};




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
 
let _checkIfUserExists = ( email  ) => {
  return Meteor.users.findOne( { 'email': email }  );
};

let _checkIfUserEmailExists = ( email  ) => {
  return Meteor.users.findOne( { 'emails.address': email }  );
};

let _checkIfUsernameExists = ( username ) => {
  return Meteor.users.findOne( { 'username': username } );
};
let _createUser = ( user ) => {
  let userId = Accounts.createUser({
    email: user.email, 
    password: 'password',
    profile: {
      name: user.name
   },
   isVerified: false
    
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
      password: 'password',
    });
  }


  return users;
};

Modules.server.generateAccounts = generateAccounts;
Modules.server.generateAccountsBFBL = generateAccountsBFBL;