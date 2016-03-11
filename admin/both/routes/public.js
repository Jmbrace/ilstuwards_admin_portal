const publicRoutes = FlowRouter.group({
  name: 'public',
  triggersEnter: [ publicRedirect ]
});

publicRoutes.route( '/invite/:token', {
  name: 'invite',
  action() {
    BlazeLayout.render( 'default', { yield: 'invite' } );
  }
});