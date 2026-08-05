# abneteja.com

Lloc web estàtic d'ABneteja, fet amb Jekyll i publicat a GitHub Pages.

## Estructura

    _config.yml            Configuració del lloc
    _data/
      empresa.yml          Telèfon, correu, NIF, ID de Formspree — font única
      pages.yml            Correspondència CA ⇄ ES (hreflang i selector d'idioma)
      serveis.yml          Catàleg de serveis, amb les dues llengües juntes
      zones.yml            Municipis
      i18n/ca.yml          Tots els textos en català
      i18n/es.yml          Tots els textos en castellà
    _layouts/              base.html (esquelet HTML) i page.html
    _includes/
      head.html seo.html header.html footer.html cta.html
      pages/               Una plantilla per pàgina, compartida per les dues llengües
    assets/css/main.css    Full d'estil únic
    assets/fonts/          PT Sans Narrow i Montserrat (.woff2) — VEURE SOTA
    assets/img/            Logotip, favicon, imatge Open Graph
    *.html                 Pàgines en català (arrel)
    es/*.html              Pàgines en castellà

Les pàgines són fitxers de quatre línies: només declaren `ref`, `lang` i
`permalink`, i criden la plantilla compartida. El text viu a `_data/i18n/`.
Per editar contingut, gairebé sempre n'hi ha prou d'obrir el YAML.

## Afegir una pàgina

1. Afegir l'entrada a `_data/pages.yml` amb les dues rutes.
2. Afegir els textos a `_data/i18n/ca.yml` i `_data/i18n/es.yml` sota la mateixa clau.
3. Crear `_includes/pages/nom.html`.
4. Crear `nom.html` i `es/nombre.html` amb el front matter corresponent.

## Entorn local

    sudo apt install ruby-full build-essential zlib1g-dev
    bundle install
    bundle exec jekyll serve --livereload

El lloc queda a <http://localhost:4000>.

## Pendents abans de publicar

- [ ] Telèfon real a `_data/empresa.yml`
- [ ] ID de Formspree a `_data/empresa.yml`
- [ ] Domicili fiscal a l'avís legal (`_includes/pages/legal.html`)
- [ ] Tipografies `.woff2` a `assets/fonts/` (vegeu els noms a `main.css`)
- [ ] `logo-abneteja.svg`, `favicon.svg`, `apple-touch-icon.png`, `og-abneteja.png` a `assets/img/`
- [ ] Revisió dels textos legals per l'assessoria
