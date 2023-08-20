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
        $('#modal-money').css('display', 'block');
        console.log('expand-money clicked');
    });
    $('#expand-efficiency').click(function () {
        $('#modal-efficiency').css('display', 'block');
        console.log('expand-efficency clicked');
    });
    $('#expand-speed').click(function () {
        // set display: block for #modal-speed
        $('#modal-speed').css('display', 'block');
        console.log('expand-speed clicked');
    });


    // add event listener to the buttons with id 'close-modal'
    $('#close-modal-speed').click(function () {
        $('#modal-speed').css('display', 'none');
    });
    $('#close-modal-money').click(function () {
        $('#modal-money').css('display', 'none');
    });
    $('#close-modal-efficiency').click(function () {
        $('#modal-efficiency').css('display', 'none');
    });
});