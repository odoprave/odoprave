# Alternatívne odoprave - BETA

[![Docker Automated buil](https://img.shields.io/docker/automated/odoprave/odoprave.svg)](https://hub.docker.com/r/odoprave/odoprave/) Komunikácia: [![Slack Slovensko.Digital](https://img.shields.io/badge/Slack-Slovensko.Digital%20-brightgreen.svg)](http://slack.slovensko.digital/)

Výskumný vizualizačný projekt, ktorý používa verejne dostupné dáta zo štátneho
portálu odoprave.info.

Verejne dostupné na [https://odoprave.github.io/odoprave/](https://odoprave.github.io/odoprave/).

Použité technológie: statické HTML/CSS/JS.

# Naštartuj si vlastné odoprave

Projekt je k dispozícii aj ako Docker image, založený na ngnix:

```
docker run --name odoprave -d -p 80:80 odoprave/odoprave
```

# Náhľad

[![Alternatívne odoprave](https://raw.githubusercontent.com/odoprave/odoprave/gh-pages/doc/alternativne-odoprave-demo.gif)](https://odoprave.github.io/odoprave/)

[![Alternatívne odoprave na mobile](https://raw.githubusercontent.com/odoprave/odoprave/gh-pages/doc/alternativne-odoprave-demo-mobil.gif)](https://odoprave.github.io/odoprave/)

# V čom je tento projekt lepší ako štátne odoprave.info?

Niektoré body môžu býť subjektívne, prípadne môžu závisieť na rýchlosti
použitého pripojenia a skúsenostiach používateľa. Nateraz:

- otvorený kód / vývoj: možnosť jednoducho zlepšiť funkcionalitu
- cena prevádzky: bez nákladov, použité bezplatné [GitHub Pages] https://pages.github.com/
- rýchlosť načítania: alternatívne odoprave [1,4 sek](https://www.webpagetest.org/result/170128_7W_3DD/) verzus štátne odoprave.info [8,4 sek](https://www.webpagetest.org/result/170128_48_35Z/)
- použiteľnosť
  - mapa si pamätá poslednú pozíciu
  - pozícia je ukladaná aj v URL a histórii prehliadača
  - možnosť jednoduchej používateľskej spätnej väzby


# Ako prispieť?

Preferovaný je [kolaboratívny model vývoja na GitHub-e](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/).
Projekt je zatiaľ v BETA verzii, takže pull requesty sú vhodnejšie v tejto fáze.


# Kde nájsť inšpiráciu

Inšpiráciu na vylepšenia UI/UX/funkcionalitu odporúčam hľadať v projektoch:

- https://www.google.sk/maps
- https://www.waze.com/
- https://mapy.cz/
- https://tfl.gov.uk/

Alebo priamo v [názoroch od používateľov](https://drive.google.com/open?id=12rvKn9tzxVOp2upSybXnpJUnxbKO7aG2WsoC1SbAyOY).


# Experimentálne

**Porovnanie premávky NSDI verzus Google**
https://odoprave.github.io/odoprave/labs/nsdi-google-traffic-comparison/

Vrstvy aktuálnej premávky z NSDI a Google na jednej mape pre jednoduchšie
vzájomné porovnanie:

[![Porovnanie premávky NSDI/Google](https://raw.githubusercontent.com/odoprave/odoprave/gh-pages/labs/nsdi-google-traffic-comparison/nsdi-google-traffic-comparison.gif)](https://odoprave.github.io/odoprave/labs/nsdi-google-traffic-comparison/)


**Odoprave analytics**

Zatiaľ nepublikované POC na vizualizáciu "najhorúcejších" miest z histórie
zaznamenaných udalostí premávky zo štátneho portálu odoprave.info
(približne 3,5 tisíc udalostí).

![Odoprave analytics](https://raw.githubusercontent.com/odoprave/odoprave/gh-pages/labs/odoprave-analytics.gif)


# Prevádzka

Pár príkladov na provisioning/configuration management alternatívneho odoprave:

- [Terraform pre Digital Ocean](https://github.com/odoprave/odoprave/tree/gh-pages/doc/terraform-do)
- [Puppet](https://github.com/odoprave/odoprave/tree/gh-pages/doc/puppet)
- [Ansible](https://github.com/odoprave/odoprave/tree/gh-pages/doc/ansible)
- [Docker Compose](https://github.com/odoprave/odoprave/blob/gh-pages/doc/docker-compose.yaml)


# Použité projekty

Nateraz má projekt svoju podobu vďaka:

- https://github.com/openlayers/openlayers
- https://github.com/Turbo87/sidebar-v2
- https://github.com/walkermatt/ol3-layerswitcher
- https://github.com/FortAwesome/Font-Awesome


# Licencia

[GNU AFFERO GENERAL PUBLIC LICENSE (AGPL)](https://github.com/odoprave/odoprave/blob/gh-pages/LICENSE)
