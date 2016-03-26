Template.login.onRendered( () => {
  Modules.client.login( { form: "#login", template: Template.instance() } );
});

Template.login.events({
  'submit form': function(event){
  	event.preventDefault();
  	console.log("Flag");
  	
  }});

