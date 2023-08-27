// onready
$(document).ready(function () {
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
        calculate();
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

    // add event listener to classes 'carousel-button'
    $('.carousel-button').click(function () {
        // get the id of the button
        var id = $(this).attr('id');
        // get image with class 'carousel-image'
        var image = $('.carousel-item');
        var paragraph = $('.type-explainer');
        console.log(paragraph.text)
        var buttons = $('#carousel-button');
        for (var i = 0, button; button = buttons[i]; i++) {
            // remove class 'active'
            $(button).removeClass('active');
        }
        if (id == 'balcony-button') {
            // set the src of the image to the image of the balcony
            image.attr('src', '../assets/images/smart_pv_day.png');
            // set the text of the paragraph to the text of the balcony
            paragraph.text('Ein Balkonkraftwerk (Solarkraftwerk) ist die kleinste und einfachste Photovoltaikanlage, die Sonnenenergie in elektrische Energie umzuwandeln.Diese Solaranlagen sind als Plug & Play Solar Kit erhältlich, sind einfach zu installieren und dürfen ohne Fachpersonal angeschlossen werden.Die Kosten für diese Solar Kits sind im Bereich CHF 500. - bis 1’000.-.Das Solarmodul wird meist aussen an einem Balkongeländer, auf einem Gartenhaus oder auf einem Hausdach montiert wird.');
            $(this).addClass('active');
        } else if (id == 'normal-button') {
            // set the src of the image to the image of the normal pv
            image.attr('src', '../assets/images/smart_pv_night.png');
            // set the text of the paragraph to the text of the normal pv
            paragraph.text('Eine normale Photovoltaikanlage wird auf dem Dach installiert. Sie ist nicht modular aufgebaut und kann nicht erweitert werden. Die Anlage ist nicht mobil und kann nicht überall aufgestellt werden.');
            $(this).addClass('active');
        } else if (id == 'smart-button') {
            // set the src of the image to the image of the smart pv
            image.attr('src', '../assets/images/smart_pv_day.png');
            // set the text of the paragraph to the text of the smart pv
            paragraph.text('Smart PV ist eine Photovoltaikanlage, die auf dem Balkon installiert wird. Sie ist einfach zu installieren und kann überall aufgestellt werden. Die Anlage ist modular aufgebaut und kann jederzeit erweitert werden.');
            $(this).addClass('active');
        }
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

    // add ripple effect to all cards
    var cards = document.querySelectorAll('.mdc-card');
    for (var i = 0, card; card = cards[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(card);
    }


    // add event listener to the button with id 'calculate'
    $('#calculate').click(function () {
        calculate();
    });

    function calculate() {
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
        var savingMoney = savingEnergy * values[4]
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
        var savingsCard = document.getElementById('savings-card');
        var einspeisungsCard = document.getElementById('einspeisungs-card');
        var energybillCard = document.getElementById('energybill-card');
        // get their paragraphs
        var amortisationParagraph = amortisationCard.getElementsByTagName('p')[0];
        var savingsParagraph = savingsCard.getElementsByTagName('p')[0];
        var einspeisungsParagraph = einspeisungsCard.getElementsByTagName('p')[0];
        var energybillParagraph = energybillCard.getElementsByTagName('p')[0];
        // set the values
        amortisationParagraph.innerHTML = amortization + ' CHF pro Jahr <br>' + amortizationTime.toFixed(2) + ' Jahre';
        savingsParagraph.innerHTML = savingMoney + ' CHF pro Jahr<br>' + savingEnergy + ' kWh pro Jahr';
        einspeisungsParagraph.innerHTML = moneyNetwork + ' CHF pro Jahr (' + energyNetwork + ' kWh)<br>' + moneyReturn + ' CHF pro Jahr (' + energyReturn + ' kWh)';
        energybillParagraph.innerHTML = energyBill + ' CHF pro Jahr';

        //show the cards
        amortisationCard.style.display = 'block';
        savingsCard.style.display = 'block';
        einspeisungsCard.style.display = 'block';
        energybillCard.style.display = 'block';
    }


    // attach an event listener to radio buttons
    var radios = document.querySelectorAll('.mdc-radio');
    for (var i = 0, radio; radio = radios[i]; i++) {
        radio.addEventListener('click', function () {
            fill_inputs(this.children[0].id);
            calculate();
        });
    }


    function fill_inputs(id = 'radio-1') {
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