
window.onload = function() {
    
    var noBox = document.getElementById('checkboxNo');
    var yesBox = document.getElementById('checkboxYes');
    var getPhotosButton = document.getElementById('getPhotos');
    var texty = document.getElementById('texty');
    console.log(getPhotosButton);


    noBox.addEventListener('click', function() {
        var getPhotosButton = document.getElementById('getPhotos');
        getPhotosButton.disabled = true;
        texty.hidden = true;
    });

    yesBox.addEventListener('click', function() {
        var getPhotosButton = document.getElementById('getPhotos');
        getPhotosButton.disabled = false;
        texty.hidden = false;
    })


    getPhotosButton.addEventListener('click', function() {
        prompt('Whats up');
    });




    function clickBox() {
        console.log('stuff');
    }
}






