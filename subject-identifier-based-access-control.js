// IDP SubjectIdentifier-based access control for applications
var onLoginRequest = function(context) {
    executeStep(1, {
        onSuccess: function (context) {
            subjectIdentifier = context.currentKnownSubject.identifier;
            if (context.steps[1].idp === "IDP1") {
                if (subjectIdentifier == null || !subjectIdentifier.endsWith('@idp1.com')){
                    sendError('http://www.example.com/error',{'errorcode':'000403','errorMsg':'You are not allowed to login to this app.'});
                }
            } else if (context.steps[1].idp === "IDP2") {
                if (subjectIdentifier == null || !subjectIdentifier.endsWith('@idp2.com')){
                    sendError('http://www.example.com/error',{'errorcode':'000403','errorMsg':'You are not allowed to login to this app.'});
                }
            }
        }
    });
};
