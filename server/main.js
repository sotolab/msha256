import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  // CryptoJS.SHA256(message)
  // CryptoJS.HmacSHA256(message, key)
  for (i = 0; i < 1000; i++) {
    noun = "message" + i;
    sha256 = CryptoJS.SHA256(noun).toString();
    console.log("SHA256 : " + sha256);
    // "2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91"
    hmacsha256 = CryptoJS.HmacSHA256("Message", "SecretPassphrase").toString();
    console.log("hmacsha256 : " + hmacsha256);
    // "2f77668a9dfbf8d5848b9eeb4a7145ca94c6ed9236e4a773f6dcafa5132b2f91"
  }
});
