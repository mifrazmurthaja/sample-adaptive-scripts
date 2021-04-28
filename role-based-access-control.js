// Role-based access control for applications
var APP_ROLE = 'Application/SP1';
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            var user = context.currentKnownSubject;
            // Checking if the user is assigned to the given role
            var isAuthorized = hasRole(user, APP_ROLE);
            if (!isAuthorized) {
                // Redirect the user to an error page
                sendError('http://www.example.com/error',{'errorcode':'000403','errorMsg':'You are not allowed to login to this app.'});
            }
        }
    });
};
