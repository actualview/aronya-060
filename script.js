window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Stego',
            location: {
                lat: 35.147624,
                lng: 129.132499,
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${35.147624}; longitude: ${129.132499};`);
        model.setAttribute('gltf-model', './assets/stego.gltf');
        model.setAttribute('rotation', '0 15 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '1.2 1.2 1.2');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(model);
    });
}
