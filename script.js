function startMap(){
    var coord = {lat:-12.0652951 ,lng:-77.0778438};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 20,
        center: coord
    })
    var marker = new google.maps.marker({
        position: coord,
        map : map
    })

}