# Dicsőítő daltár — használati útmutató

Ez egy statikus weboldal: nincs szükség szerverre, adatbázisra vagy bejelentkezésre.
Aki megnyitja az oldalt, **csak keresni, megnézni és PDF-ben letölteni** tud — szerkeszteni
nem. Dalokat **egyedül te tudsz hozzáadni**, a `songs.js` fájl szerkesztésével.

## A fájlok

| Fájl | Mi ez | Kell hozzányúlni? |
|------|-------|-------------------|
| `songs.js` | **A dalok adatai.** Ezt szerkeszted, ha új dalt adsz hozzá. | **IGEN** |
| `index.html` | Maga az oldal. | Nem |
| `styles.css` | A kinézet. | Nem |
| `app.js` | A keresés/szűrés/PDF működése. | Nem |

## Az oldal megnyitása

Kattints duplán az `index.html` fájlra — megnyílik a böngésződben. Ennyi.

---

## Új dal hozzáadása (a lényeg)

1. Nyisd meg a `songs.js` fájlt egy szövegszerkesztővel
   (pl. TextEdit, vagy még jobb: a Visual Studio Code — ingyenes).
2. Keress egy meglévő dal-blokkot. Egy blokk így néz ki:

```js
  {
    cim: "Uram, hozzád jövök (minta)",
    tempo: "lassú",
    hangnem: "G",
    temak: ["dicsőítés", "imádat"],
    szoveg: `
# Versszak
[G]Uram, hozzád [D]jövök ma [Em]reggel,
[C]csendben megállok [G]előtted.
`
  },
```

3. Jelöld ki egy egész blokkot a `{`-tól a `},`-ig, **másold le**, és
   **illeszd be** közvetlenül utána.
4. Írd át a beillesztett blokk tartalmát a saját dalodra.
5. Mentsd el a fájlt, és frissítsd az oldalt a böngészőben (Cmd+R). Kész!

### A mezők jelentése

- **cim** – a dal címe idézőjelben. Pl. `"Áldott legyen"`
- **tempo** – csak ez a három lehet: `"lassú"`, `"közepes"` vagy `"gyors"`.
- **hangnem** – a dal hangneme, pl. `"G"`. Ha nem tudod / nem kell, hagyd üresen: `""`
- **temak** – témák/címkék listája szögletes zárójelben, vesszővel elválasztva.
  Pl. `["dicsőítés", "úrvacsora"]`. Egy téma is elég: `["adventi"]`.
  **A szűrő gombok automatikusan létrejönnek** abból, amit ide beírsz —
  ha ugyanazt a témát több dalnál használod, akkor tudsz rá szűrni.
- **szoveg** – a dal szövege az akkordokkal, a `` ` `` (backtick) jelek között.

### A szöveg és az akkordok írása

A dalszöveget a **két `` ` `` (backtick) jel közé** írd. (A backtick a billentyűzeten
általában az `1` mellett, vagy Mac-en `Alt` + `ö` környékén van.)

- **Akkord:** szögletes zárójelben, közvetlenül az elé a szótag elé, amelyik
  felett szólnia kell:

  ```
  [G]Áldott [D]légy Uram
  ```

  Az oldalon így jelenik meg:

  ```
  G       D
  Áldott  légy Uram
  ```

- **Szakasz címe** (Versszak, Refrén, Híd, stb.): a sort kezdd `#` jellel:

  ```
  # Refrén
  ```

- **Üres sor:** térközt tesz a szakaszok közé.

Nem kötelező akkordokat írni — ha csak szöveget írsz, az is szépen megjelenik.

---

## Amit a látogató tud

- **Keresés** a keresőmezőbe írva — a **cím ÉS a dalszöveg** alapján egyszerre.
  (Az ékezeteket nem kell pontosan írni: az „aldott” is megtalálja az „Áldott”-at.)
- **Szűrés** tempóra és témára a gombokkal (többet is be lehet kapcsolni).
- **Megtekintés:** egy dalra kattintva megnyílik teljes szöveggel és akkordokkal.
- **Akkordok elrejtése** gomb — csak az éneklőknek, akiknek nem kell akkord.
- **Letöltés PDF-ben** gomb — az adott dalt külön PDF-ként menti
  (a böngésző nyomtatási ablaka nyílik meg → „Mentés PDF-ként”).
- **Sötét / világos mód** — a jobb felső sarokban lévő nap/hold ikonnal váltható;
  a böngésző megjegyzi a választást.

## Jó tudni

- **Betűtípusok:** az oldal szép betűket (Playfair Display, Inter) tölt le az
  internetről. Ha nincs net, automatikusan a rendszer betűire vált — akkor is
  minden működik és olvasható, csak a betűk néznek ki egyszerűbben.
- **Legszebben helyi kiszolgálóval néz ki.** Ha csak duplán kattintasz az
  `index.html`-re, a legtöbb böngészőben tökéletesen működik. (Ha közzéteszed
  online — lásd lentebb —, minden funkció garantáltan hibátlan.)

---

## Ha közzé akarod tenni az interneten (opcionális)

Most az oldal a saját gépeden fut. Ha szeretnéd, hogy mások is elérjék egy
linken keresztül, ingyenes lehetőségek (mind statikus oldalt szolgál ki):

- **Netlify** (netlify.com) – csak húzd rá a mappát az oldalukra.
- **GitHub Pages** – ha van GitHub-fiókod.
- **Cloudflare Pages**

Mindegyikhez elég feltölteni ezt a négy fájlt. Szólj, ha ebben segítsek.
