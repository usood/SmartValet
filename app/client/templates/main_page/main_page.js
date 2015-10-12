/*****************************************************************************/
var MAP_ZOOM = 15;
Meteor.startup(function () {
    // get current position
    GoogleMaps.load({libraries: 'drawing,geometry,places'});
});

/* Home: Event Handlers */
/*****************************************************************************/
Template.MainPage.events({
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
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.MainPage.helpers({
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
Template.MainPage.onCreated(function () {
    var self = this;

    GoogleMaps.ready('map', function (map) {
        var marker;
        var input = document.getElementById('pac-input');
        var searchBox = new google.maps.places.SearchBox(input);
        //map.instance.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        map.instance.addListener('bounds_changed', function () {
            searchBox.setBounds(map.instance.getBounds());
        });
        searchBox.addListener('places_changed', function () {
            var places = searchBox.getPlaces();

            if (places.length == 0) {
                return;
            }

            markers = [];
            // Clear out the old markers.
            markers.forEach(function (marker) {
                marker.setMap(null);
            });
            // For each place, get the icon, name and location.
            var bounds = new google.maps.LatLngBounds();
            places.forEach(function (place) {
                var icon = {
                    url: place.icon,
                    size: new google.maps.Size(71, 71),
                    origin: new google.maps.Point(0, 0),
                    anchor: new google.maps.Point(17, 34),
                    scaledSize: new google.maps.Size(25, 25)
                };

                // Create a marker for each place.
                markers.push(new google.maps.Marker({
                    map: map.instance,
                    icon: icon,
                    title: place.name,
                    position: place.geometry.location
                }));

                if (place.geometry.viewport) {
                    // Only geocodes have viewport.
                    bounds.union(place.geometry.viewport);
                } else {
                    bounds.extend(place.geometry.location);
                }
            });
            map.fitBounds(bounds);
        });
        // Create and move the marker when latLng changes.
        self.autorun(function () {
            var latLng = Geolocation.latLng();
            if (!latLng)
                return;

            // If the marker doesn't yet exist, create it.
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
            // Center and zoom the map view onto the current position.
            map.instance.setCenter(marker.getPosition());
            map.instance.setZoom(MAP_ZOOM);
        });
    });
});