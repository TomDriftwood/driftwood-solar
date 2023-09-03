// This file will inject html into the header of the page


$(document).ready(function () {
    // get the div with class='header'
    const header = document.querySelector('.header-component');
    const head = document.querySelector('head');

    // insert stylesheet 'header-component.css' into the header
    const path = "../header-component/header-component.css";
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = path;
    head.appendChild(link);

    // set innerHTML
    header.innerHTML = `
     <div class="header-content">
            <a href="../index.html"><img src="../assets/images/logo_round.webp" alt="Driftwood Solar Logo" class="logo"></a>
            <nav role="navigation">
                <ul>
                    <li><a
                            href="../Planung.html">Planung</a>
                    </li>

                    <li><a
                            href="../Anlagetypen.html">Anlagetypen</a>
                        <ul class="dropdown">
                            <li><a
                                    href="../Anlagetypen.html#af4fa0b4-b678-4ad5-b991-d47904d89ca4">Balkonkraftwerke</a>
                            </li>
                            <li><a
                                    href="../Anlagetypen.html#8262db99-b2a2-4358-9d48-10276e1fc61f">Einfache
                                    PV-Anlagen</a></li>
                            <li><a
                                    href="../Anlagetypen.html#fe704d23-5c5e-45e6-8806-426d75ef469a">Smarte
                                    PV-Anlagen</a></li>
                        </ul>
                    </li>

                    <li><a
                            href="../Komponenten.html">Komponenten</a>
                        <ul class="dropdown">
                            <li><a
                                    href="../Komponenten.html#628b8646-10e7-4dc5-bbf5-1343cc288896">Solarmodule</a>
                            </li>
                            <li><a
                                    href="../Komponenten.html#9e86f3ca-3156-4eda-b7e4-ff65b7664b2e">Optimierer</a>
                            </li>
                            <li><a
                                    href="../Komponenten.html#22eb3683-c46f-4a71-aaf8-38a845806175">Wechselrichter</a>
                            </li>
                            <li><a
                                    href="../Komponenten.html#a94e6d68-054a-4a81-96a9-26427c081596">Batterien</a>
                            </li>
                            <li><a
                                    href="../Komponenten.html#181e7ce2-5be9-483d-ba79-b733705ec10b">Wallbox</a>
                            </li>
                            <li><a
                                    href="../Komponenten.html#a07ce957-8ba4-418f-a481-a2fc76ac0715">Energiemanagement</a>
                            </li>
                        </ul>
                    </li>

                    <li><a
                            href="../Strompreismarkt.html">Strommarkt</a>
                        <ul class="dropdown">
                            <li><a
                                    href="../Strompreismarkt.html#64ed3b58-ec5d-42f4-bb0e-de82ebe52065">Weshalb ist der Strompreis stark angestiegen?</a>
                            </li>
                            <li><a
                                    href="../Strompreismarkt.html#4a423b7c-6b4a-48f8-aa25-6a5dfcf6a348">Grosse Tagesschwankungen an den Strombörsen</a>
                            </li>
                            <li><a
                                    href="../Strompreismarkt.html#b8bced1c-cdc0-47aa-a815-d1387cf00da6">Wie
                                    entwickeln sich die Strompreise in der Zukunft</a>
                            </li>
                        </ul>
                    </li>

                </ul>
                </li>
                </ul>
            </nav>
            <span class="material-symbols-rounded" id="about-icon">
                <a id="about-icon" href="https://www.notion.so/valentinfrlch/ber-uns-25454e305320481a9e8d5fa14cfd741c">
                    info
                </a>
            </span>
        </div>
        `;



    // GLOBAL EVENT LISTENERS
    header.addEventListener('mouseover', function (event) {
        // get the article element and blur it
        const article = document.querySelector('article');
        article.style.filter = 'blur(5px)';
        article.style.webkitBackdropFilter = 'blur(5px)';
        article.style.transition = 'filter 0.3s';
    });
    header.addEventListener('mouseout', function (event) {
        // get the article element and blur it
        const article = document.querySelector('article');
        article.style.filter = 'blur(0px)';
        article.style.webkitBackdropFilter = 'blur(0px)';
        article.style.transition = 'filter 0.3s';
    });
});