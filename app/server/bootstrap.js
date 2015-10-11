Meteor.startup(function () {
});

ServiceConfiguration.configurations.upsert(
    { service: "facebook" },
    {
        $set: {
            clientId: process.env['ACCOUNTS_FACEBOOK_ID'],
            loginStyle: "popup",
            secret: process.env['ACCOUNTS_FACEBOOK_SECRET']
        }
    }
);

ServiceConfiguration.configurations.upsert(
    { service: "twitter" },
    {
        $set: {
            clientId: process.env['ACCOUNTS_TWITTER_ID'],
            loginStyle: "popup",
            secret: process.env['ACCOUNTS_TWITTER_SECRET']
        }
    }
);
