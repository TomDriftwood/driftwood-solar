// onready
$(document).ready(function () {
    // when clicking button 'hero-start-button'
    $('#main-button').click(function () {
        // open website (same tab)
        window.open('https://www.notion.so/valentinfrlch/Selbstbau-Photovoltaikanlage-1ea59febff274d369490fd2e2843ac23', '_self');
        console.log('button clicked');
    });

    // add event listener to the buttons with ids 'expand-money' and 'expand-efficency'
    // and 'expand-speed'
    $('#expand-money').click(function () {
        // find closest element with class 'modal-backdrop' and set display to 'block'

        console.log('expand-money clicked');
    });
    $('#expand-efficiency').click(function () {
        console.log('expand-efficency clicked');
    });
    $('#expand-speed').click(function () {
        console.log('expand-speed clicked');
    });


    // add event listener to the buttons with id 'close-modal'
    $('#close-modal').click(function () {
        // do something
        console.log('close-modal clicked');
        // set display of '.modal-backdrop' to 'none'
        $('.modal-backdrop').css('display', 'none');
    });



});