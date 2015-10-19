Meteor.publish('cars', function () {
  return Cars.find();
});

Meteor.publish('user', function (_id) {
  return Meteor.users.find({_id: _id});
});