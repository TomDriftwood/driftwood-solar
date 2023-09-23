// This file will inject html into the footer of the page


$(document).ready(function () {
    // get the div with class='footer'
    const footer = document.querySelector('.footer-component');
    const head = document.querySelector('head');

    // insert stylesheet 'footer-component.css' into the footer
    const path = "../footer-component/footer-component.css";
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    head.appendChild(link);

    // set innerHTML
    footer.innerHTML = `
     <div class="footer-content">
            <a href="../index.html"><img src="../assets/images/logo_round.webp" alt="Driftwood Solar Logo" class="logo"></a>
            <div class="footer-links">
                <p>Kontakt</p>
               
                 <a href="mailto:driftwod-solar@gmail.com"> <span class="material-symbols-rounded">
                    mail
                </span>Mail</a>
            </div>
            <div class="footer-contact">
                <p>© Driftwood Solar, Zürcher Oberland, Schweiz
        </div>
        `;
});