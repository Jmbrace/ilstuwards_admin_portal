Template.users.onCreated( () => {
  Template.instance().subscribe( 'pins' );
});