# Solar by Driftwood

<img width="700" alt="image" src="https://github.com/TomDriftwood/driftwood-solar/assets/85313672/acdf5a90-ec41-4cdd-86ca-8a330dd1baa2">


[Live Site](https://tomdriftwood.github.io/driftwood-solar)


## Notion Exportieren
### Notion als HTML herunterladen
<img width="30" alt="image" src="https://github.com/TomDriftwood/driftwood-solar/assets/85313672/80172c61-6811-4c1e-87bc-8f7f9da0120a"> → <img width="178" alt="image" src="https://github.com/TomDriftwood/driftwood-solar/assets/85313672/d262d649-bddd-434f-918a-de89d4595656">

<img alt="image" src="https://github.com/TomDriftwood/driftwood-solar/assets/85313672/29065b32-3801-4d6a-98f6-74d38691f02e"><br>
_Als Export Format HTML auswählen_

### Ordnerstruktur vorbereiten
1. ZIP entpacken
_Falls Bilder oder andere Medien in Notion eingebettet wurden sind diese in einem separatem Ordner_

**Ordnername nicht verändern!**

2. HTML aus dem Ordner ziehen

3. HTML umbenennen:

  `Planung 813126c4f9864b6d963c1f7de4960b45.html` → `Planung.html`

### HTLM Style Injection
1. Direkt unter `<head>`
`<base href="pages/" />` Einfügen

2. Zwischen dem  `</style>` und `</head>` tag folgendes einfügen:
  ``` 
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <script src="../header-component/header-component.js"></script>
  ```

3. Direkt nach dem `</head>` tag die Navigationsleiste einfügen:
   
   `<div class="header-component"></div>`

### Hochladen
1. Das HTML ins /root directory hochladen
2. Den Ordner in den Unterordner 'pages' hochladen
