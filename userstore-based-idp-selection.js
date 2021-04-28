// Userstore based IDP selection on 2nd step
// However, an authenticator is required to be in the 1st step to identify the userstore domain
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            // Extracting user store domain of authenticated subject from the first step
            var userStoreDomain = context.currentKnownSubject.userStoreDomain;
            if (userStoreDomain == 'PRIMARY') {
                executeStep(2,{
                   authenticationOptions:[
                      {idp:'facebook'}
                   ]} ,{
                   onSuccess: function (context) {
                       // Do something on success
                   }
                });
            } else {
                executeStep(2,{
                   authenticationOptions:[
                      {idp:'google'}
                   ]} ,{
                   onSuccess: function (context) {
                       executeStep(3);
                   }
                });
            }
        }
    });
};
