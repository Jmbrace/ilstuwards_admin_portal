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