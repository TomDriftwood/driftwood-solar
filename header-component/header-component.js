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
            <img src="../assets/images/logo_round.webp" alt="Driftwood Solar Logo" class="logo">
            <nav role="navigation">
                <ul>
                    <li><a
                            href="../Selbstbau Photovoltaikanlage.html">Planung</a>
                        <ul class="dropdown">
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Planung-Kosten-813126c4f9864b6d963c1f7de4960b45?pvs=4#815d6fdad2d44befa6157c74ec9754d2">Projektablauf</a>
                            </li>
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Planung-Kosten-813126c4f9864b6d963c1f7de4960b45?pvs=4#6cd12c139e4e4155b52e80c1431248f8">Kosten</a>
                            </li>
                        </ul>
                    </li>

                    <li><a
                            href="https://www.notion.so/valentinfrlch/Anlagetypen-aff1bac2fc0b4ce3bbf0ac68776e4a3c">Anlagetypen</a>
                        <ul class="dropdown">
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Anlagetypen-aff1bac2fc0b4ce3bbf0ac68776e4a3c?pvs=4#3db49f37bc28478ba6a170eb50c253a1">Balkonkraftwerke</a>
                            </li>
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Anlagetypen-aff1bac2fc0b4ce3bbf0ac68776e4a3c?pvs=4#8262db99b2a243589d4810276e1fc61f">Einfache
                                    PV-Anlagen</a></li>
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Anlagetypen-aff1bac2fc0b4ce3bbf0ac68776e4a3c?pvs=4#fe704d235c5e45e68806426d75ef469a">Smarte
                                    PV-Anlagen</a></li>
                        </ul>
                    </li>

                    <li><a
                            href="https://www.notion.so/valentinfrlch/Komponenten-3064771db50f47efba779fd150838f0c">Komponenten</a>
                        <ul class="dropdown">
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Komponenten-3064771db50f47efba779fd150838f0c?pvs=4#c3be0fd203a5484691e5df9cb91df6dd">Solarzellen</a>
                            </li>
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Komponenten-3064771db50f47efba779fd150838f0c?pvs=4#22eb3683c46f4a71aaf838a845806175">Wechselrichter</a>
                            </li>
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Komponenten-3064771db50f47efba779fd150838f0c?pvs=4#32bbd0af401d4b08a40e43a5225775da">Batterien</a>
                            </li>
                        </ul>
                    </li>

                    <li><a
                            href="https://www.notion.so/valentinfrlch/Strompreismarkt-6b05a91313814dc6841de67db728289b">Strommarkt</a>
                        <ul class="dropdown">
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Strompreismarkt-6b05a91313814dc6841de67db728289b?pvs=4#64ed3b58ec5d42f4bb0ede82ebe52065">Strompreise</a>
                            </li>
                            <li><a
                                    href="https://www.notion.so/valentinfrlch/Strompreismarkt-6b05a91313814dc6841de67db728289b?pvs=4#4a423b7c6b4a48f8aa256a5dfcf6a348">Wie
                                    entwickeln sich die Strompreise in der Zukunft</a></li>
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
    });
    header.addEventListener('mouseout', function (event) {
        // get the article element and blur it
        const article = document.querySelector('article');
        article.style.filter = 'blur(0px)';
    });
});