const blockUnauthorizedAdmin = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), 'admin' ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

const blockUnauthorizedFarm = ( context, redirect ) => {
  if ( Meteor.userId() && !Roles.userIsInRole( Meteor.userId(), [ 'admin', 'farm' ] ) ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};


const authenticatedRedirect = () => {
  if ( !Meteor.loggingIn() && !Meteor.userId() ) {
    FlowRouter.go( 'login' );
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

authenticatedRoutes.route( '/farm', {
  name: 'farm',
  triggersEnter: [ blockUnauthorizedFarm ],
  action() {
    BlazeLayout.render( 'default', { yield: 'farm' } );
  }
});
