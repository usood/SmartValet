Cars = new Mongo.Collection('cars');

Cars.attachSchema(new SimpleSchema({
    brand: {
        type: String,
        label: "Brand",
        max: 100
    },
    model: {
        type: String,
        label: "Model",
        max: 100
    },
    damages: {
        type: String,
        label: "Damages",
        allowedValues: ['Front', 'Left', 'Right', 'Back'],
        optional: true
    },
    color: {
        type: String,
        label: "Body Color",
        allowedValues: ['red', 'green', 'blue', 'yellow', 'white', 'black', 'orange', 'purple'],
    }
}));


if (Meteor.isServer) {
    Cars.allow({
        insert: function (userId, doc) {
            return true;
        },

        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },

        remove: function (userId, doc) {
            return true;
        }
    });
}
