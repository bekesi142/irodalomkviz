const adatok = [
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Hamlet",
      "Válasz": "Dán királyfi",
      "Kép": "hamlet.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Hamlet apja",
      "Válasz": "Dánia volt királya",
      "Kép": "oreghamlet.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Claudius",
      "Válasz": "Hamlet nagybátyja",
      "Kép": "claudius.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Gertrud",
      "Válasz": "Hamlet megözvegyült anyja",
      "Kép": "gertrud.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Polonius",
      "Válasz": "A király tanácsadója",
      "Kép": "polonius.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Ophelia",
      "Válasz": "Hamlet szerelme",
      "Kép": "ophelia.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Laertes",
      "Válasz": "Polonius fia",
      "Kép": "laertes.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Horatio",
      "Válasz": "Hamlet tanácsadója, barátja",
      "Kép": "horatio.png"
    },
    {
      "Téma": "Szereplőkvíz",
      "Kérdés": "Fortinbras",
      "Válasz": "Norvégia trónörököse",
      "Kép": "fortinbras.png"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Hamlet",
      "Válasz": "Párbajban"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Hamlet apja",
      "Válasz": "Megmérgezik"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Claudius",
      "Válasz": "Leszúrja Hamlet"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Gertrud",
      "Válasz": "Mérget iszik véletlen"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Polonius",
      "Válasz": "Leszúrják miközben hallgatózik"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Ophelia",
      "Válasz": "Öngyilkos"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Laertes",
      "Válasz": "Párbajban"
    },
    {
      "Téma": "Hogy hal meg",
      "Kérdés": "Horatio",
      "Válasz": "Túléli"
    },
    {
      "Téma": "Jellemzők",
      "Kérdés": "Hamlet",
      "Válasz": "Döntésképtelen"
    },
    {
      "Téma": "Jellemzők",
      "Kérdés": "Claudius",
      "Válasz": "Hataloméhes"
    },
    {
      "Téma": "Jellemzők",
      "Kérdés": "Gertrud",
      "Válasz": "Áldozatul esett"
    },
    {
      "Téma": "Jellemzők",
      "Kérdés": "Polonius",
      "Válasz": "Ravasz"
    },
    {
      "Téma": "Jellemzők",
      "Kérdés": "Horatio",
      "Válasz": "Hűséges"
    },
    {
      "Téma": "Jellemzők",
      "Kérdés": "Laertes",
      "Válasz": "Forrófejű"
    },
    {
      "Téma": "Melyik műben szerepel",
      "Kérdés": "Bede Anna tartozása",
      "Válasz": "Bede Erzsi",
      "Kép": "bedeannatartozasa.png"
    },
    {
      "Téma": "Melyik műben szerepel",
      "Kérdés": "Péri lányok szép hajáról",
      "Válasz": "Péri Kata",
      "Kép": "perilanyok.png"
    },
    {
      "Téma": "Melyik műben szerepel",
      "Kérdés": "Timár Zsófi özvegysége",
      "Válasz": "Rögi Mihály",
      "Kép": "timarzsofi.png"
    },
    {
      "Téma": "Melyik műben szerepel",
      "Kérdés": "A bágyi csoda",
      "Válasz": "Vér Klára",
      "Kép": "bagyicsoda.png"
    },
    {
      "Téma": "Melyik műben szerepel",
      "Kérdés": "A néhai bárány",
      "Válasz": "Csuri Jóska",
      "Kép": "nehaibari.png"
    },
    {
      "Téma": "Mikor történt",
      "Kérdés": "Megszületett",
      "Válasz": "1877"
    },
    {
      "Téma": "Mikor történt",
      "Kérdés": "Összeházasodik",
      "Válasz": "1915"
    },
    {
      "Téma": "Mikor történt",
      "Kérdés": "Meghal",
      "Válasz": "1919"
    },
    {
      "Téma": "Mikor történt",
      "Kérdés": "Megírja a Lédával a bálbant",
      "Válasz": "1907",
      "Kép": "leda.png"
    },
    {
      "Téma": "Mikor történt",
      "Kérdés": "Megírja a Héja-nász az avaront",
      "Válasz": "1906",
      "Kép": "hejanasz.png"
    },
    {
      "Téma": "Melyik ki",
      "Kérdés": "Léda",
      "Válasz": "Brüll Adél",
      "Kép": ["leda1.png", "leda2.png", "leda3.png"]
    },
    {
      "Téma": "Melyik ki",
      "Kérdés": "Csinszka",
      "Válasz": "Boncza Berta",
      "Kép": "csinszka.png"
    },
    {
      "Téma": "Melyik ki",
      "Kérdés": "anyja",
      "Válasz": "Pásztor Mária",
      "Kép": "pasztormaria.png"
    },
    {
      "Téma": "Melyik ki",
      "Kérdés": "első szerelme, Zsóka",
      "Válasz": "Friedmann Erzsike",
      "Kép": "zsoka.png"
    },
    {
      "Téma": "Melyik ki",
      "Kérdés": "halálának oka",
      "Válasz": "Mihályi Rozália"
    }
  ]

