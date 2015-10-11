Meteor.publish('cars', function () {
  return Cars.find();
});