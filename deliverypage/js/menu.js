//UPLOAD IMAGE FORM
const post_btn = document.getElementById("post_address_btn");
const overlay = document.getElementById("overlay");
const close_btn = document.querySelector("#close_btn");
const close_btn_2 = document.querySelector("#close_btn_2");
const menu_item = document.querySelector(".menu__item")
const overlay2 = document.getElementById("overlay2")

post_btn.onclick = function ()  {
    overlay.style.display = "grid";
}

close_btn.onclick = function() {
    overlay.style.display = "none";
    overlay2.style.display = "none";
}

close_btn_2.onclick = function() {
    overlay.style.display = "none";
    overlay2.style.display = "none";
}

overlay.addEventListener('click', function(e) {
    if (e.target.id == 'overlay') {
        overlay.style.display = "none";
    }
})

menu_item.onclick = function () {
    overlay2.style.display = 'grid';
}

overlay2.addEventListener('click', function(e) {
    if (e.target.id == 'overlay2') {
        overlay2.style.display = "none";
    }
})

//Map feature
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13
    });
    var input = document.getElementById('search_input');
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var autocomplete = new google.maps.places.Autocomplete(input);
    autocomplete.bindTo('bounds', map);

    var infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map,
        anchorPoint: new google.maps.Point(0, -29)
    });

    autocomplete.addListener('place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            window.alert("Autocomplete's returned place contains no geometry");
            return;
        }
  
        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);
        }
        marker.setIcon(({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);
    
        var address = '';
        if (place.address_components) {
            address = [
              (place.address_components[0] && place.address_components[0].short_name || ''),
              (place.address_components[1] && place.address_components[1].short_name || ''),
              (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }
    
        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);
    });
}

function goToVoucher() {
    window.location = "../voucher/voucher.html";
    window.location.href = "../voucher/voucher.html";
    window.location.assign("../voucher/voucher.html");
}