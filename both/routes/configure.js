Accounts.onLogin( () => {
  let currentRoute = FlowRouter.current();
  if ( currentRoute && currentRoute.route.group.name === 'public' ) {
    Modules.both.redirectUser();
  }
});


//I believe we need this but it is uncommented for now
// if ( Meteor.isClient ) {
//   Tracker.autorun( () => {
//     if ( !Meteor.userId() && FlowRouter.current().route ) {
//       FlowRouter.go( 'login' );
//     }
//   });
// }
// FlowRouter.notFound = {
//   action() {
//     BlazeLayout.render( 'default', { yield: 'notFound' } );
//   }
// };