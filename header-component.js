// This file will inject html into the header of the page


$(document).ready(function () {
    // get the div with class='header'
    const header = document.querySelector('.header-component');
    const styleElement = document.querySelector('head style');
    style = `
    <style>
        @font-face {
            font-family: Space-Grotesk;
            src: url(../assets/fonts/space-grotesk.ttf);
            --webkit-font-smoothing: antialiased;
            --moz-osx-font-smoothing: grayscale;
            }

            /* set variables for colors*/
            :root {
                --color-primary: #242636;
                --color-accent: #2e3145;
                --color-secondary: #e3b753;
                --text-primary: #ffffff;
                --text-secondary: #565656;
            }
            .header-component {
                all: initial;
                position: fixed;
                top: 0px;
                left: 0px;
                width: 100%;
                height: 5vw;
                min-height: 100px;
                font-family: Space-Grotesk;
                font-size: 1.5em;
                color: var(--text-primary);
                /* make the white background transparent when not hovering*/
                background-color: rgba(255, 255, 255, 0);
                z-index: 1;
            }

            .header-component :hover {
                all: initial;
                background-color: var(--color-primary);
                transition: background-color 0.5s;
            }

            .header-content {
                display: grid;
                grid-template-columns: 0.5fr 1fr 0.5fr;
                padding-left: 1vw;
            }

            .logo {
                width: 5vw;
                min-width: 100px;
                left: 0;
                padding: 0.5em;
            }

            #about-icon {
                display: flex;
                justify-content: space-around;
                align-items: center;
                margin-right: 0;
                font-size: 1em;
                color: var(--text-primary);
                text-decoration: none;
            }

                /*-------------------NAVIGATION-------------------*/

                nav {
                    font-size: 11px;
                    line-height: 16px;
                    letter-spacing: 0.3px;
                    font-weight: 400;
                }

                ul {
                    display: flex;
                    flex-flow: row wrap;
                    list-style: none;
                    margin-top: 3vh;
                    /* center the list*/
                    justify-content: center;
                    align-items: center;
                }

                li {
                    color: var(--text-primary);
                    background: transparent;
                    font-size: 1.2em;
                    justify-content: center;
                    align-items: center;
                    padding: 1rem 25px;
                }

                li a {
                    color: var(--text-primary);
                    text-decoration: none;
                }

                li :hover {
                    color: var(--color-secondary);
                }

                .dropdown {
                    max-height: 50vh;
                    left: 0;
                    width: 100%;
                    overflow-y: auto;
                    background: var(--color-primary);
                }

                .dropdown p {
                    display: block;
                    padding: 10px 25px;
                }

                .dropdown p::before {
                    position: absolute;
                    content: "";
                    height: 1px;
                    background-color: var(--color-primary);
                    width: 100%;
                    padding: 0;
                    left: 0;
                    z-index: 10;
                }

                .dropdown > li {
                    background: var(--color-primary);
                    padding-left: 36%;
                    font-size: 1em;
                    color: var(--text-secondary);
                }

                .dropdown > li:first-child {
                    margin-top: 10px;
                }

                .dropdown > li:last-child {
                    margin-bottom: 10px;
                }

                .dropdown > li:hover {
                    background: var(--color-primary);
                }

                li:hover {
                    background: var(--color-primary);
                    cursor: pointer;
                }

                ul li ul {
                    position: absolute;
                    opacity: 0;
                    transition: all 0.3s ease;
                    margin-top: 1rem;
                    transform: translateX(-25px);
                    display: none;
                }

                ul li:hover > ul,
                ul li ul:hover {
                    visibility: visible;
                    opacity: 1;
                    display: block;
                }
        </style>
        `
        
    try {
        styleElement.insertAdjacentHTML('afterend', style);
    }
    catch (err) {
        // there's no style element so add it to the head
        document.head.innerHTML += style;
    }

    // set innerHTML
    header.innerHTML = `
     <div class="header-content">
            <img src="assets/images/logo_round.webp" alt="Driftwood Solar Logo" class="logo">
            <nav role="navigation">
                <ul>
                    <li><a
                            href="subpages/Selbstbau Photovoltaikanlage.html">Planung</a>
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
});