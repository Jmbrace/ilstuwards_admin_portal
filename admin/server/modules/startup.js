let startup = () => {
  _setEnvironmentVariables();
  _setBrowserPolicies();
  _generateAccounts();

  // _setAdmins();
};

let _setEnvironmentVariables = () => {
  let settings = Meteor.settings.private;
  process.env.MAIL_URL = "smtp://postmaster%40sandbox89c658f7407e4beba0ebdfc77143c297.mailgun.org:f5a78530906b0c0ff90291187863d297@smtp.mailgun.org:587";
};

let _setBrowserPolicies = () => {};

let _generateAccounts = () => Modules.server.generateAccounts();

let _setAdmins = () => Modules.server.setAdmins();

Modules.server.startup = startup;