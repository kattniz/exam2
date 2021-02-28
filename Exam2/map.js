let map

function initMap() {
    // The location of Sthlm
    const sthlm = { lat: 59.3307, lng: 18.0579 }
    let htmlMap = document.getElementById("map")
    let options = {
            zoom: 8,
            center: { lat: 59.3307, lng: 18.0579 }
        }
        // The map, centered at Sthlm
    map = new google.maps.Map(htmlMap, options)
        // The marker, positioned at Sthlm
    const marker = new google.maps.Marker({
        position: sthlm,
        map: map
    });
}