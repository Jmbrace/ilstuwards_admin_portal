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

});