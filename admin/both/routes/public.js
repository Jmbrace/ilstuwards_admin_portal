const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

const publicRedirect = ( context, redirect ) => {
  if ( Meteor.userId() ) {
    Modules.both.redirectUser( { redirect: redirect } );
  }
};

publicRoutes.route( '/invite/:token', {
  name: 'invite',
  action() {
    BlazeLayout.render( 'default', { yield: 'invite' } );
  }
});

FlowRouter.route('/', {
  action: function() {
    BlazeLayout.render("admin");
  }
});

FlowRouter.route('/login', {
  action: function() {
    BlazeLayout.render("login");
  }

});

FlowRouter.route('/signup', {
  action: function() {
    BlazeLayout.render("signup");
  }
});

publicRoutes.route( '/recover-password', {
  name: 'recover-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'recoverPassword' } );
  }
});

publicRoutes.route( '/reset-password/:token', {
  name: 'reset-password',
  action() {
    BlazeLayout.render( 'default', { yield: 'resetPassword' } );
});

FlowRouter.route('/pins', {
  action: function() {
    BlazeLayout.render("pins");
  }
});