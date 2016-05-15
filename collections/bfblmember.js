BFBLmember = new Meteor.Collection( 'bfblmember' );
Schema = {};
BFBLmemberSchema = new SimpleSchema({
  category: {type: String, defaultValue: null},
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
  long: { type: Number, defaultValue: null},
  user: {type: String, defaultValue: null}
});
 
BFBLmember.attachSchema( BFBLmember.schema );


let copyCollection = () => {
  var bfblCursor = BFBL.find({});
  var bfblCounter = BFBLmember.find({}).count();
  if(bfblCounter > 0){
    console.log('BFBL migration completed.');
  }  
  else{
    bfblCursor.forEach( function ( member){ 
      BFBLmember.insert({
        category: member.category,
        business : member.business,
        name: member.name,
        phone: member.phone,
        email: member.email,
        address: member.address,
        city: member.city,
        state: member.state,
        zip: member.zip,
        county: member.county,
        description: member.description,
        business_phone: member.business_phone,
        business_email: member.business_email,
        website: member.website,
        facebook: member.facebook,
        hours_of_operation: member.hours_of_operation,
        user: member.user,
        lat: null,
        long: null
      }, { validate: false, filter: false }, function(error){
        if(error) throw error;
      });
   });
  }
};

copyCollection();