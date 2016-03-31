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
    console.log("FlagHOME");
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