Accounts.onLogin( () => {
  let currentRoute = FlowRouter.current();
  if ( currentRoute && currentRoute.route.group.name === 'public' ) {
    Modules.both.redirectUser();
  }
});