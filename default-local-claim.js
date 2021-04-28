// Define default local claim for users
var CLAIM_GIVEN_NAME = "http://wso2.org/claims/givenname"
var claimValue;
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            user = context.currentKnownSubject;
            claimValue = user.localClaims[CLAIM_GIVEN_NAME];
            Log.info(claimValue);
            if(claimValue == null){
                user.localClaims[CLAIM_GIVEN_NAME] = "DefaultValue";
            }
        }
    });
};
