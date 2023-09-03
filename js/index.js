$(document).ready(function () {
    $('#expand-motivation').click(function () {
        $('#modal-motivation').css('display', 'block');
    });
    $('#expand-money').click(function () {
        $('#modal-money').css('display', 'block');
    });
    $('#expand-efficiency').click(function () {
        $('#modal-efficiency').css('display', 'block');
    });
    $('#expand-speed').click(function () {
        $('#modal-speed').css('display', 'block');
    });
    $('#expand-calculator').click(function () {
        $('#modal-calculator').css('display', 'block');
        fill_inputs();
        calculate();
    });


    // add event listener to the buttons with id 'close-modal'
    $('#close-modal-motivation').click(function () {
        $('#modal-motivation').css('display', 'none');
    });
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
        var id = $(this).attr('id');
        var image = $('.carousel-item');
        var paragraph = $('.type-explainer');
        console.log(paragraph.text)
        var buttons = $('.carousel-button');
        for (var i = 0, button; button = buttons[i]; i++) {
            $(button).removeClass('active');
        }
        if (id == 'balcony-button') {
            image.attr('src', '../assets/images/balcony.png');
            paragraph.text('Ein Balkonkraftwerk (Solarkraftwerk) ist die kleinste und einfachste Photovoltaikanlage, die Sonnenenergie in elektrische Energie umzuwandeln.Diese Solaranlagen sind als Plug & Play Solar Kit erhältlich, sind einfach zu installieren und dürfen ohne Fachpersonal angeschlossen werden.Die Kosten für diese Solar Kits sind im Bereich CHF 500. - bis 1’000.-.Das Solarmodul wird meist aussen an einem Balkongeländer, auf einem Gartenhaus oder auf einem Hausdach montiert wird.');
            $(this).addClass('active');
        } else if (id == 'normal-button') {
            image.attr('src', '../assets/images/simple_pv.png');
            paragraph.text('Eine normale Photovoltaikanlage wird auf dem Dach installiert. Sie ist nicht modular aufgebaut und kann nicht erweitert werden. Die Anlage ist nicht mobil und kann nicht überall aufgestellt werden.');
            $(this).addClass('active');
        } else if (id == 'smart-button') {
            image.attr('src', '../assets/images/smart_pv.png');
            paragraph.text('Smart PV ist eine Photovoltaikanlage, die auf dem Balkon installiert wird. Sie ist einfach zu installieren und kann überall aufgestellt werden. Die Anlage ist modular aufgebaut und kann jederzeit erweitert werden.');
            $(this).addClass('active');
        }
    });


    // Planning Section
    const cards = document.querySelectorAll("ul.timeline li");

    // add an event listener to each card
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            var nextCards = card.nextElementSibling;
            while (nextCards) {
                nextCards.style.color = "var(--text-tertiary)";
                nextCards = nextCards.nextElementSibling;
            }
            var previousCards = card.previousElementSibling;
            while (previousCards) {
                previousCards.style.color = "var(--text-primary)";
                previousCards = previousCards.previousElementSibling;
            }
            cardTitle = card.childNodes[0].textContent
            setTitle(cardTitle);
            card.style.color = "var(--text-primary)";
        });
    });





    // Material Design
    var textFields = document.querySelectorAll('.mdc-text-field');
    for (var i = 0, textField; textField = textFields[i]; i++) {
        mdc.textField.MDCTextField.attachTo(textField);
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
    var MDCcards = document.querySelectorAll('.mdc-card');
    for (var i = 0, MDCcards; MDCcards = MDCcards[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(MDCcards);
    }

    // Set the onclick function for timeline-button
    setTitle('Vorbereitung')


    // add event listener to cards with id 'carousel-nav-card'
    var carouselNavCards = document.querySelectorAll('#carousel-nav-card');
    for (var i = 0, carouselNavCard; carouselNavCard = carouselNavCards[i]; i++) {
        carouselNavCard.addEventListener('click', function () {
            var href = this.getAttribute('href');
            // open a new window with the href
            window.open(href, '_blank');
        });
    }

    // add event listener to banner with id 'energy-banner-card'
    var energyBannerCard = document.getElementById('energy-banner-card');
    energyBannerCard.addEventListener('click', function () {
        var href = 'https://www.ekz.ch/de/privatkunden/strom/tarife/stromtarife.html#tarife2024';
        // open a new window with the href
        window.open(href, '_blank');
    });

    // add event listener to the button with id 'calculate'
    $('#calculate').click(function () {
        calculate();
    });

    function calculate() {
        var inputs = document.querySelectorAll('.mdc-text-field__input');
        var values = [];
        for (var i = 0, input; input = inputs[i]; i++) {
            var value = input.value;

            if (value.includes('%')) {
                value = value.replace('%', '');
            }
            if (value.includes(',')) {
                value = value.replace(',', '.');
            }
            if (value.includes('€') || value.includes('.-')) {
                value = value.replace('€', '');
                value = value.replace('.-', '');
            }
            if (value.includes(' ')) {
                value = value.replace(' ', '');
            }
            if (value.includes("'")) {
                value = value.replace("'", '');
            }
            if (isNaN(value)) {
                input.parentElement.classList.add('mdc-text-field--invalid');

            }
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
        var amortisationCard = document.getElementById('amortisation-card');
        var savingsCard = document.getElementById('savings-card');
        var einspeisungsCard = document.getElementById('einspeisungs-card');
        var energybillCard = document.getElementById('energybill-card');

        var amortisationParagraph = amortisationCard.getElementsByTagName('p')[0];
        var savingsParagraph = savingsCard.getElementsByTagName('p')[0];
        var einspeisungsParagraph = einspeisungsCard.getElementsByTagName('p')[0];
        var energybillParagraph = energybillCard.getElementsByTagName('p')[0];

        amortisationParagraph.innerHTML = amortization + ' CHF pro Jahr <br>' + amortizationTime.toFixed(2) + ' Jahre';
        savingsParagraph.innerHTML = savingMoney + ' CHF pro Jahr<br>' + savingEnergy + ' kWh pro Jahr';
        einspeisungsParagraph.innerHTML = 'Import: '+ moneyNetwork + ' CHF pro Jahr (' + energyNetwork + ' kWh)<br>' + 'Export: ' + moneyReturn + ' CHF pro Jahr (' + energyReturn + ' kWh)';
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
        var example = [10, 18000, 10000, 75, 0.328, 0.188];
        if (radioId == 1) {
            var example = [10, 18000, 10000, 75, 0.328, 0.188];
        } else if (radioId == 2) {
            var example = [10, 12000, 10000, 40, 0.328, 0.188];
        } else if (radioId == 3) {
            var example = [10, 45000, 10000, 75, 0.328, 0.188];
        } else if (radioId == 4) {
            var example = [10, 39000, 10000, 40, 0.328, 0.188];
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

    function setTitle(cardTitle) {
        // get the paragraph element with class 'type-explainer'
        var paragraph = document.getElementsByClassName('timeline-explainer')[0];
        // set the text acordingly
        if (cardTitle == 'Vorbereitung') {
            text = 'Am Anfang des PV-Projekt sollte man sich überlegen auf welchen Dächern (Schrägdach, Flachdach, Garage, Gartenhaus) man Solarmodule montieren kann, ob genügend Platz vorhanden ist und ob die Ausrichtung der Dächer für die Solarstromerzeigung geeignet sind: Den höchsten Jahresertrag erzielt man auf Dächern mit Südausrichtung und einer Neigung von ca. 30 Grad. Aber auch eine Ost-West Ausrichtung kann durchaus Sinn machen, denn damit erzielt man zwar einen etwas niedrigeren Jahresertrag, dafür erzeugt man in den Morgen- und Abendstunden mehr Energie als mit einer nur nach Süden ausgerichteten Anlage. Insbesondere für PV-Anlagen ohne Batterie ist deshalb eine Ost-West Ausrichtung attraktiv, da sich der Stromertrag über einen längeren Zeitraum pro Tag erstreckt. Die Solarerzeugung auf Dächern mit Nordausrichtung und einer Neigung von über 15% macht wirtschaftlich keinen Sinn, da insbesondere im Winter bei tierstehender Sonne der Ertrag niedrig ist. Neben der verfügbaren Dachfläche muss man die Statik prüfen und beim Architekten oder Statiker abgeklärt, ob das Dach die für die zusätzliche Last (normalerweise 20-45 kg/m2) der PV-Anlage ausgelegt ist.';
        }
        if (cardTitle == 'Elektriker suchen') {
            text = 'Es lohnt sich, frühzeitig einen auf Solaranlagen spezialisierten Elektriker zu suchen. Die Suche erweist sich nicht immer als einfach, denn nicht alle Elektriker können PV-Anlagen in Betrieb nehmen und sind bereit, den AC-Anschluss bei selbst erstellten PV-Anlagen zu machen. Am besten bespricht man mit dem Elektriker sein PV-Projekt und spricht mit ihm ab, welche Arbeiten man selber ausführen kann und welche vom Elektriker übernommen werden.';
        }
        if (cardTitle == 'Planung') {
            text = 'Nachdem das PV-Projekt mit dem Elektriker abgesprochen ist, kann man mit der Detailplanung beginnen. Man muss die Leistung der PV-Anlage festlegen sowie geeignete Wechselrichter, Batterien, Smart Meter und eine Wallbox auswählen. Auch über die Verschattung der Solarmodule sollte man sich Gedanken machen: hat man z.B. einen Kamin oder eine Gaube auf dem Dach oder grosse Bäume in der Umgebung, die einen wandernden Schatten im Tagesverlauf auf die Solarmodule werfen, kann die Ausstattung der Module mit Optimierern sinnvoll sein. Diese haben zudem den Vorteil, dass dann die Leistung aller mit einem Optimierer ausgestatteten Solarmodule einzeln überwacht werden kann und damit die Fehlersuche nach defekten Solarmodulen einfach ist.';
        }
        if (cardTitle == 'Anmeldung') {
            text = 'Seit dem Jahr 2023 müssen im Kanton Zürich Solaranlagen lediglich der zuständigen Behörde (Gemeinde) gemeldet werden, eine Baubewilligung ist nicht mehr nötig. Am besten bespricht man mit der Baubehörde der Gemeinde, welche Unterlagen beim Meldeverfahren eingereicht werden müssen. Normalerweise sind dies ein Katasterblatt mit der Aufsicht auf die Solarmodule, das Modulblatt der Solarpanels und eine Skizze für die Gebäudeversicherung & Feuerwehr mit dem genauen Standort der elektrischen Geräte der PV-Anlage befinden.';
        }
        if (cardTitle == 'Bewilligung') {
            text = 'Der Elektriker reicht die Installationsanzeige (IA) für die PV-Anlage und das technische Anschlussgesuch (TAG) beim Netzbetreiber ein. Falls zusätzlich eine Wallbox installiert werden soll, braucht es auch dafür eine Installationsanzeige (IA).';
        }
        if (cardTitle == 'Bestellung') {
            text = 'Der Erwerb von Einzelkomponenten für eine PV-Anlage erweist sich in der Schweiz als nicht so einfach, denn die Grossverteiler (z.B. Solarmarkt) verkaufen nur an Firmen und nicht an Privatpersonen. Aber wer sucht wird fündig: die Solarmodule, die elektrischen Geräte und die Unterkonstruktion können von kleineren, innovativen Firmen in der Schweiz zu teils fairen Preisen erworben werden. Eine weitere Möglichkeit bietet der Erwerb im Ausland: in Deutschland ist der Selbstbau von PV-Anlagen weit verbreitet und deshalb die Angebote für Privatpersonen wesentlich umfangreicher und oft auch günstiger als in der Schweiz. Wer sich die Waren an eine Lieferadresse an der Grenze liefern lässt und diese dann selber in die Schweiz importiert, kann  günstig alle Komponenten einer PV-Anlage erwerben.';
        }
        if (cardTitle == 'Installation') {
            text = 'Die Solarmodule werden meist auf einer Unterkonstruktion aus Aluminium montiert. Bei Schrägdächern werden Dachhaken auf die Holzunterkonstruktion der Dachziegel geschraubt und auf Aluminiumschinen montiert. Detaillierte Anleitungen dazu findet man z.B. auf YouTube. Bei Flachdächern werden die Module meist im 15 Grad Winkel leicht aufgestellt und auf einer Alu-Unterkonstruktion montiert. Diese wird mittels Balaststeinen (Betonplatten) beschwert, ein Verschrauben mit dem Dach ist nicht nötig. Die Aluminiumunterkonstruktion muss geerdet werden und falls vorhanden an eine Blitzschutzanlage angeschlossen werden. Die Solarmodule dürfen im Selbstbau montiert werden.Erlaubt ist auch das Stecken von Modulverbindungen mit vorkonfektionierten Kabeln.Der Wechselrichter und die Batterie darf vormontiert werden.Alle AC - seitigen Elektroarbeiten müssen zwingend von einem zertifizierten Elektriker ausgeführt werden.';
        }
        if (cardTitle == 'Elektroarbeiten') {
            text = 'Der Elektriker führt alle Arbeiten am Sicherungskasten durch. Er schliesst den Wechselrichter sowie der Wallbox AC-seitig an und baut den Smart Meter und die notwendigen LS-Schalter ein. Danach führt der Elektriker die Erstprüfung der PV-Anlage durch und erstellt ein Mess- und Prüfprotokoll. Am Schluss nimmt er die PV-Anlage in Betrieb, so dass der erste selber produzierte Solarstrom geerntet werden kann.';
        }
        if (cardTitle == 'Kontrolle') {
            text = 'Innerhalb von 6 Monaten nach der Inbetriebnahme der PV-Anlage muss ein unabhängiges Kontrollorgan oder eine akkreditierte Inspektion die PV-Anlage kontrollieren, den Sicherheitsnachweis erstellen und dem Netzbetreiber einreichen.';
        }

        paragraph.innerHTML = text;
        // get the button with id 'timeline-button' and set the onclick script
        var button = document.getElementById('timeline-button');
        link = '../Planung.html#' + cardTitle;
        button.setAttribute('onclick', 'location.href="' + link + '"');
        // animate the paragraph with keyframes
        // text should fade out and fade in and slide up when changing
        paragraph.style.animation = 'fadeout 0.5s ease-in-out forwards';
        setTimeout(function () {
            paragraph.style.animation = 'fadein 0.5s ease-in-out forwards';
        }, 500);
    }
});