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
}
];
