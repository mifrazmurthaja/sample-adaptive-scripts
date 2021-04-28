// Define default IDP claim for users
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
             if (context.steps[1].idp === "Google") {
                user = context.currentKnownSubject;
                 if(getAssociatedLocalUser(user) == null){
                     user.remoteClaims.claim1 = "DefaultValue";
                 }
            }
        }
    });
};
