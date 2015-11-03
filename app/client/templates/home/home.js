Template.Home.rendered = function () {
    this.autorun(function () {
        if (Meteor.loggingIn()) {
            IonLoading.show();
        } else {
            IonLoading.hide();
        }
    }.bind(this));
};

/*****************************************************************************/
var MAP_ZOOM = 15;
Meteor.startup(function () {
    // get current position
    GoogleMaps.load({libraries: 'drawing,geometry,places'});
});

/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
    'click [data-action="showConfirm"]': function (event, template) {
        IonPopup.confirm({
            title: 'Are you sure?',
            template: 'Valet will be signalled to bring your car.',
            onOk: function () {
                console.log('Confirmed');
            },
            onCancel: function () {
                IonPopup.close();
            }
        });
    },
    'click [data-action="locate"]': function (event, template) {
        var marker;
        GoogleMaps.ready('map', function (map) {
            var latLng = Geolocation.latLng();
            if (!marker) {

                marker = new google.maps.Marker({
                    position: new google.maps.LatLng(latLng.lat, latLng.lng),
                    map: map.instance,
                    draggable: true,
                    animation: google.maps.Animation.DROP
                });
            }
            // The marker already exists, so we'll just change its position.
            else {
                marker.setPosition(latLng);
            }
            map.instance.setCenter(marker.getPosition());
            map.instance.setZoom(MAP_ZOOM);
        });
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
    geolocationError: function () {
        var error = Geolocation.error();
        return error && error.message;
    },
    mapOptions: function () {
        var latLng = Geolocation.latLng();
        // Initialize the map once we have the latLng.
        if (GoogleMaps.loaded() && latLng) {
            return {
                center: new google.maps.LatLng(latLng.lat, latLng.lng),
                zoom: MAP_ZOOM,
                disableDefaultUI: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
        }
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
    var self = this;

    GoogleMaps.ready('map', function (map) {
        var marker;
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        // Create and move the marker when latLng changes.
        self.autorun(function () {
            var latLng = Geolocation.latLng();
            if (!latLng)
                return;
            var currentLocationMarker = {
                name: "Current Location",
                latitude: latLng.lat,
                longitude: latLng.lng
            };
            var markers = Venues.find().fetch();
            markers.push(currentLocationMarker);
            // If the marker doesn't yet exist, create it.
            if (!marker) {
                for (var i = 0; i < markers.length; i++) {
                    var image = 'iphone.png';
                    marker = new google.maps.Marker({
                        position: new google.maps.LatLng(markers[i].latitude, markers[i].longitude),
                        map: map.instance,
                        draggable: true,
                        animation: google.maps.Animation.DROP,
                        icon: image,
                        title: markers[i].name
                    });
                }
            }
            // The marker already exists, so we'll just change its position.
            else {
                marker.setPosition(latLng);
            }
            // Center and zoom the map view onto the current position.
            map.instance.setCenter(marker.getPosition());
            map.instance.setZoom(MAP_ZOOM);
        });
    });
});



