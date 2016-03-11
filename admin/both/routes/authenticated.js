const blockUnauthorizedAdmin = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), 'admin' ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

const blockUnauthorizedManager = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), [ 'admin', 'manager' ] ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};


const authenticatedRoutes = FlowRouter.group({
  name: 'authenticated',
  triggersEnter: [ authenticatedRedirect ]
});

authenticatedRoutes.route( '/users', {
  name: 'users',
  triggersEnter: [ blockUnauthorizedAdmin ],
  action() {
    BlazeLayout.render( 'default', { yield: 'users' } );
  }
});

authenticatedRoutes.route( '/managers', {
  name: 'managers',
  triggersEnter: [ blockUnauthorizedManager ],
  action() {
    BlazeLayout.render( 'default', { yield: 'managers' } );
  }
});
