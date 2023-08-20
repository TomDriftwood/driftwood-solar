// listen for nav bar hover event

// on hover show the dropdown menu
// on hover out hide the dropdown menu


$(document).ready(function () {
    // attach a hover event listener to each nav bar item
    $('.nav-item').hover(function () {
        // show it's respective dropdown menu
        // set display to block
        // only run this once to prevent flickering
        $(this).find('.flyout-content').show();
        expanded = true;
        console.log('mouse is above dropdown');
        // the dropdown menu does not update when moving
        // to a previous menu item
        // update the dropdown menu to the current menu item

    }, function () {
        // get mouse y position
        var mouseY = event.clientY;
        console.log(mouseY);
        // get the lower bound of the dropdown menu
        var dropdownHeight = $(this).find('.flyout-content').offset().top + $(this).find('.flyout-content').height();
        // if the mouse is below the lower bound of the dropdown menu
        if (mouseY > dropdownHeight) {
            // hide the dropdown menu
            // set display to none
            console.log('mouse is below dropdown');
            $(this).find('.flyout-content').hide();
        }
    });
});