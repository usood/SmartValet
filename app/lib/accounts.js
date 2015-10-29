AccountsTemplates.configure({
    confirmPassword: true,
    enablePasswordChange: true,
    continuousValidation: true,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true
});

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone",
    required: true,
    func: function (number) {
        if (Meteor.isServer) {
            if (isValidPhone(number))
                return false; // meaning no error!
            return true; // Validation error!
        }
    },
    errStr: 'Invalid Phone number!',
});



