// Assign role to federated users
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
             if (context.steps[1].idp === "Google") {
                user = context.currentKnownSubject;
                //user = context.steps[1].subject;
                assignUserRoles(user, ['grole2']);
            }
        }
    });
};
