/* =========================================================================
   DALOK ADATFÁJLJA  ::  ITT ADHATSZ HOZZÁ ÚJ DICSŐÍTŐ DALOKAT
   =========================================================================

   Minden dal egy blokk a lenti listában, két { } kapcsos zárójel között,
   vesszővel elválasztva. Új dalhoz másolj le egy meglévő blokkot, illeszd be
   a lista végére (az utolsó } után), és írd át a tartalmát.

   MEZŐK:
   .........................................................................
   cim:      A dal címe.                          pl.  "Áldott legyen"
   tempo:    "lassú"  vagy  "közepes"  vagy  "gyors".
   hangnem:  A dal hangneme (nem kötelező).        pl.  "G"   vagy  ""
   szoveg:   A dal szövege az akkordokkal. (Lásd lentebb a formátumot.)

   A SZÖVEG ÉS AKKORDOK FORMÁTUMA:
   .........................................................................
   A szöveget a  `  (visszafelé dőlő aposztróf, backtick) jelek KÖZÉ írd.

   Akkord:      szögletes zárójelben, közvetlenül az elé a szótag elé,
                amelyik felett szólnia kell.   pl.   [G]Áldott [D]légy
                A weboldalon az akkord a szöveg FÖLÖTT jelenik meg.
   Szakasz-cím: a sort kezdd  #  jellel.        pl.   # Refrén
   Üres sor:    szakaszok közé térközt tesz.

   A látogató egy gombbal el tudja rejteni az akkordokat (csak szöveg mód),
   és külön PDF-ben le tudja tölteni a dalt.

   FONTOS: a  `  jelek és a záró  },  el ne tűnjenek :: ezek tartják egyben.
   ========================================================================= */

const SONGS = [

   {
    cim: "Döntött a szívem",
    tempo: "közepes",
    hangnem: "G",
    szoveg: `
# Versszak 1
[G]Döntött a szívem követlek Jézus
[C]Döntött a szívem követlek [G]Jézus
Döntött a szívem követlek [Em]Jézus
[G]Nincs vissza út, [D]nincs vissza [G]út

# Versszak 2
[G]Előre nézek, a régi elmúlt
[C]Előre nézek, a régi [G]elmúlt
Előre nézek, a régi [Em]elmúlt
[G]Nincs vissza út, [D]nincs vissza [G]út
`
  },


{
  cim: "Hús-vér templom",
  tempo: "közepes",
  hangnem: "Am",
  szoveg: `
# Versszak
[Am]Nekem nincs más [Dm]Rajtad kívül [G]Jézus
[Am]Életem [Dm]forrása [G]vagy
[Am]Kézzel, lábbal, [Dm]szívvel, szájjal
[F]Dicsérlek [Dm]Uram [E]

# Refrén
[Am]Ez a hús-vér [Dm]templom [E]Érted [Am]épült
Neked ég a [F]tűz, bent [Dm]oltárainál [E]
[Am]Ez a hús-vér [Dm]templom [E]Téged [Am]dicsér
Szívem minden [F]húrja [Dm]Rólad [E]muzsikál [Am]
`
},

{
  cim: "Velem vagy",
  tempo: "közepes",
  hangnem: "C",
  szoveg: `
# Intro
[C] | [Em] | [D] | // x2

# Versszak
[C]Szívem, ne csüggedj többé
[Em]Tedd le láncaid
[G]Állj fel, és menj [D]tovább

[C]Ha már elfáradtál
[Em]Hidd el, lesz, ki felsegít
[Am]És azt mondja: [G]kelj fel és [D]járj

# Refrén
[G]Veled vagy a bajban
[Am]Közel [G/H]hozzám
[C]Velem vagy tűzben
[Em]Ha minden [D]fáj

[G]Velem vagy, ha gátak
[Am]Szakadnak rám
[G/H]Karod körbezár [C]
[Am]Te visszatartod a [G]tengert
[Em]Nem félek többé [D]már

# Bridge
[C]Helyreállítottál [G/H]már
[D]Lábam újra táncot [Em]jár
[C]Csodálkozva néznek [G/H]rám
[D]Mily nagy vagy (Atyám)

# Refrén (Bridge után)
[G]Veled vagy a bajban
[Am]Közel [G/H]hozzám
[C]Velem vagy tűzben
[Em]Ha minden [D]fáj

[G]Velem vagy, ha gátak
[Am]Szakadnak rám
[G/H]Karod körbezár [C]
[Am]Te visszatartod a [G]tengert
[Em]Nem félek többé [D]már
`
},

   {
  cim: "Istennel vagyunk mi győztesek",
  tempo: "közepes",
  hangnem: "Am",
  szoveg: `
# Versszak
[Am]Istennel vagyunk mi győztesek
[G]Ő űzi el előlünk [Dm]ellenségünket [Am]
[G]Hát zengj és dicsérd [Am]győzelmét, [G]Ó [Am]az Úr
[G]Hisz Ő nyerte meg a [Am]csatát és népe [Dm]megszabadult [Am]
[G]Vére [Am]legyőzte a [Dm]gonoszt, a [E]világ tudja meg, hogy [Am]Istennel...
`
},

{
  cim: "Isten ezt a napot",
  tempo: "közepes",
  hangnem: "D",
  szoveg: `
# Versszak 1
[D]Isten ezt a napot azért adta nekünk, hogy [G]dicsérjük szent nevét [A] [D]
[G]hogy dicsérjük szent [D]nevét, hogy [G]dicsérjük szent [D]nevét

# Versszak 2
[D]Isten ezt a napot azért adta nekünk, hogy [G]néki szolgáljunk [A] [D]
[G]hogy néki [D]szolgáljunk, hogy [G]néki [D]szolgáljunk

# Versszak 3
[D]Isten ezt a napot azért adta nekünk, hogy [G]szeressük mi egymást [A] [D]
[G]hogy szeressük mi [D]egymást, hogy [G]szeressük mi [D]egymást
`
},

{
  cim: "A Föld amelyre lábad lép",
  tempo: "közepes",
  hangnem: "Dm",
  szoveg: `
# Versszak 1
[Dm]A Föld amelyre lábad lép, véges végig a tied, [C]
[Dm]mert én adtam azt neked.

# Versszak 2
[Gm]Nem illetheti az ellenség, nem lesz sohasem idegené, [Dm] [C] [Dm]
[Gm]nem lakhat ott csak az a nép, akié a szövetség. [C] [A]
`
},

{
  cim: "Felmagasztaljuk neved",
  tempo: "gyors",
  hangnem: "G",
  szoveg: `
# Versszak 1
[G]Felmagasztaljuk [C]neved, [D]zengjük dicséretedet [C] [D] [G]
[G]Csak Te vagy a [C]Megváltó, [D]jelenléted gyógyító [C] [D] [G]

# Versszak 2
[G]Néked szól, Ó Uram [C]dicséretünk
[C]hozzád tartozhatunk, [D]oly jó nekünk [C] [G]
[C]Téged magasztal szívünk, [D]legyél mindig itt velünk [Hm] [G] [C]
[D]Ó Uram, úgy [G]szeretünk. [C] [D]
`
},


];
