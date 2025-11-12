ymaps.ready(init);
let myMap;
const placemarks = [];

function init() {
    myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10,
        controls: ['zoomControl', 'fullscreenControl']
    });

    const locationItems = document.querySelectorAll('.office-card');

    locationItems.forEach((item, index) => {
        const lat = parseFloat(item.dataset.lat);
        const lon = parseFloat(item.dataset.lon);
        const name = item.dataset.name;

        if ( !lat || !lon ) return;

        const placemark = new ymaps.Placemark(
            [lat, lon],
            {
                preset: 'islands#redDotIcon'
            }
        );

        myMap.geoObjects.add(placemark);
        placemarks.push(placemark);

        // Добавляем обработчик клика на элемент списка
        item.addEventListener('click', function() {
            myMap.setCenter([lat, lon], 15, {
                duration: 300
            });
            placemark.balloon.open();
        });
    });

    if (placemarks.length > 0) {
        myMap.setBounds(myMap.geoObjects.getBounds(), {
            checkZoomRange: true,
            zoomMargin: 50
        });
    }
}