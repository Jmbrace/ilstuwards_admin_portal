BFBL = new Meteor.Collection( 'bfbl' );

BFBLSchema = new SimpleSchema({
  business: { type: String, defaultValue: null },
  name: { type: String , defaultValue: null},
  phone: { type: String , defaultValue: null }, 
  email: { type: String, defaultValue: null },
  address: { type: String, defaultValue: null },
  city: { type: String, defaultValue: null },
  state: { type: String, defaultValue: null },
  zip: { type: String, defaultValue: null },
  county: { type: String, defaultValue: null },
  description: { type: String, defaultValue: null },
  business_phone: { type: String, defaultValue: null },
  business_email: { type: String, defaultValue: null },
  website: { type: String, defaultValue: null },
  facebook: { type: String, defaultValue: null },
  hours_of_operation: { type: String, defaultValue: null},
  lat: { type: Number, defaultValue:null},
  long: { type: Number, defaultValue: null}
});

BFBL.attachSchema( BFBL.schema );


// BFBL.insert( { example of how to insert

//   business: 'Acbees Apiaries',
//   name: 'Arvin Pierce',
//   address: '16813 Lowder Rd',
//   city: 'Waverly',
//   state: 'IL',
//   zip: '62692',
//   county: '',
//   description: '',
//   business_phone: '',
//   business_email: '',
//   website: '',
//   facebook: '',
//   hours_of_operation: ''
 
// }, { validate: false, filter: false }, 
// function(error, result){
// 	//error
// });
