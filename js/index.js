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
    });
    $('#expand-efficiency').click(function () {
        $('#modal-efficiency').css('display', 'block');
    });
    $('#expand-speed').click(function () {
        // set display: block for #modal-speed
        $('#modal-speed').css('display', 'block');
    });
    $('#expand-calculator').click(function () {
        $('#modal-calculator').css('display', 'block');
        // run function fill_inputs
        fill_inputs();

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
    $('#close-modal-calculator').click(function () {
        $('#modal-calculator').css('display', 'none');
    });


    // Material Design
    var textFields = document.querySelectorAll('.mdc-text-field');
    for (var i = 0, textField; textField = textFields[i]; i++) {
        mdc.textField.MDCTextField.attachTo(textField);
        // set the color of the border to white
    }
    var buttons = document.querySelectorAll('.mdc-button');
    for (var i = 0, button; button = buttons[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(button);
        console.log('ripple attached');
    }

    //instantiate all radio buttons
    var radios = document.querySelectorAll('.mdc-radio');
    for (var i = 0, radio; radio = radios[i]; i++) {
        mdc.radio.MDCRadio.attachTo(radio);
    }


    // add event listener to the button with id 'calculate'
    $('#calculate').click(function () {
        console.log('calculate clicked')
        // get all the values from the input fields
        // the input fields are class 'mdc-text-field__input' and the ids are store in aria-labelledby
        // find the input fields with class 'mdc-text-field__input' and store them in an array
        var inputs = document.querySelectorAll('.mdc-text-field__input');
        // create an array to store the values
        var values = [];
        // loop through the inputs array
        for (var i = 0, input; input = inputs[i]; i++) {
            // get the value of the input field
            var value = input.value;

            // if the value has a % sign, remove it
            if (value.includes('%')) {
                value = value.replace('%', '');
            }
            // if value has a comma in it, replace it with a dot
            if (value.includes(',')) {
                value = value.replace(',', '.');
            }
            // if value includes a € sign or '.-' remove it
            if (value.includes('€') || value.includes('.-')) {
                value = value.replace('€', '');
                value = value.replace('.-', '');
            }
            // if value includes a ' ' remove it
            if (value.includes(' ')) {
                value = value.replace(' ', '');
            }
            // if value incudles a ' remove it
            if (value.includes("'")) {
                value = value.replace("'", '');
            }
            // if value cannot be converted to a number throw an error
            if (isNaN(value)) {
                // set the input field to invalid -> red border
                input.parentElement.classList.add('mdc-text-field--invalid');

            }
            // push the value to the values array
            values.push(value);
        }

        // calculate the values
        var perYear = 1000 * values[0]
        var powerPercentage = 100 * perYear / values[2]
        var costSoFar = values[2] * values[4]
        var savingEnergy = values[3] * values[2] / 100
        var savingMoney = savingEnergy * values[5]
        var energyNetwork = (100 - values[3]) / 100 * values[2]
        var moneyNetwork = energyNetwork * values[4]
        var energyReturn = perYear - savingEnergy
        var moneyReturn = energyReturn * values[5]

        var energyBill = moneyNetwork - moneyReturn
        var amortization = costSoFar - energyBill
        var amortizationTime = values[1] / amortization

        // set the values to the output fields
        // get the cards with id 'amortsation-card' and 'amortisationszeit-card'
        var amortisationCard = document.getElementById('amortisation-card');
        var amortisationTimeCard = document.getElementById('amortisationszeit-card');
        // get their paragraphs
        var amortisationParagraph = amortisationCard.getElementsByTagName('p')[0];
        var amortisationTimeParagraph = amortisationTimeCard.getElementsByTagName('p')[0];
        // set the values
        amortisationParagraph.innerHTML = amortization.toFixed(2) + 'CHF pro Jahr';
        amortisationTimeParagraph.innerHTML = amortizationTime.toFixed(2) + ' Jahre';

        //show the cards
        amortisationCard.style.display = 'block';
        amortisationTimeCard.style.display = 'block';
    });

    // attach an event listener to radio buttons
    var radios = document.querySelectorAll('.mdc-radio');
    for (var i = 0, radio; radio = radios[i]; i++) {
        radio.addEventListener('click', function () {
            fill_inputs(this.children[0].id);
        });
    }


    function fill_inputs(id='radio-1') {
        var radioId = parseInt(id.slice(-1));
        // get which example is selected from the radio buttons
        var radios = document.querySelectorAll('.mdc-radio');
        var example = [10, 18000, 10000, 75, 0.2, 0.1];
        if (radioId == 1) {
            var example = [10, 18000, 10000, 75, 0.2, 0.1];
        } else if (radioId == 2) {
            var example = [10, 12000, 10000, 40, 0.2, 0.1];
        } else if (radioId == 3) {
            var example = [10, 45000, 10000, 75, 0.2, 0.1];
        } else if (radioId == 4) {
            var example = [10, 39000, 10000, 40, 0.2, 0.1];
        }

        var inputs = document.querySelectorAll('.mdc-text-field__input');
        for (var i = 0, input; input = inputs[i]; i++) {
            input.value = example[i];
        }
        var inputs = document.querySelectorAll('.mdc-text-field');
        for (var i = 0, input; input = inputs[i]; i++) {
            input.focus();
        }
    }
});