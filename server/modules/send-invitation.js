let invitation = ( options ) => {
  _insertInvitation( options );
  var email = _prepareEmail( options.token );
  _sendInvitation( options.email, email );
};

let _insertInvitation = ( invite ) => {
  Invitations.insert( invite );
};

let _prepareEmail = ( token ) => {


  let domain = Meteor.settings.private.domain;
  let url    = `http://${ domain }/invite/${ token }`;
  console.log(url);
  SSR.compileTemplate( 'invitation', Assets.getText( 'email/templates/invitation.html' ) );
  let html = SSR.render( 'invitation', { url: url } );

  return html;
};

let _sendInvitation = ( email, content ) => {
  Email.send({
    to: email,
    from: "sandbox89c658f7407e4beba0ebdfc77143c297.mailgun.org",
    subject: "Invitation to The Illnois Stewardship Alliance",
    html: content
  });
};

Modules.server.sendInvitation = invitation;

