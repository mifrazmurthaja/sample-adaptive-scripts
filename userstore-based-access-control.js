// Userstore-based access control for applications
var USERSTORE_DOMAIN = 'US1';
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            var user = context.currentKnownSubject;
            // Checking if the user is in the particular userstore domain
            if (user.userStoreDomain != USERSTORE_DOMAIN) {
                // Redirect the user to an error page
                sendError('http://www.example.com/error',{'errorcode':'000403','errorMsg':'You are not allowed to login to this app.'});
            }
        }
    });
};
