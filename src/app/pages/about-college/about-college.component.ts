import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-college',
  templateUrl: './about-college.component.html',
  styleUrls: ['./about-college.component.scss'],
})
export class AboutCollegeComponent {
  showMoreHerman = false;
  showMoreMegyeri = false;
  showMoreKozma = false;

  firstSlideshowImages = [
    'assets/szoba1.jpg',
    'assets/szoba2.jpg',
    'assets/szoba3.jpg',
  ];

  textherman = `  A kollégium névadója: Herman Ottó (1835-1914) Herman Ottó 1835. június
  28-án született a Zólyom megyei Breznóbányán (ma Szlovákia, Brezno). Ez a
  pontos adat, ugyanis több századeleji lexikon azt írja, hogy június 26-án,
  és a Borsod megyei Alsóhámorban született, ám ez a változat valószínűleg
  Herman Ottó csínye volt. Megengedhette magának, hiszen mint Péter László
  írja róla: „Csodálatos termékenységű lángelme volt, a múlt század
  legnagyobb polihisztorainak egyike. Ma, a végtelenségig szakosodott
  tudományágak korában már elképzelhetetlen, hogyan alkothatott ez a
  pátriárkakort megért, lakatosinasból lett tudós nem akármilyen, hanem
  alapműveket olyan egymástól távol eső tudományterületeken, mint a
  pákászat, madártan, halászat, pásztorélet.”A lexikonok is több
  foglalkozást említenek: néprajzkutató, természettudós és politikus, a
  magyar nép anyagi kultúrájának első tudományos igényű vizsgálója. Ráadásul
  ő teremtette meg — saját gyűjtésével — a Magyar Néprajzi Múzeum halászati
  anyagának alapjait, ő hozta lére 1893-ban a Magyar Ornitológiai Központot,
  és az elsők közt szorgalmazta Magyarországon (Miskolc környéki
  feltárásaival) az antropológiai és az ősrégészeti kutatásokat. Jelentős
  volt tudománynépszerűsítő tevékenysége is. A nagy polihisztort életében 16
  bel- és külföldi tudományos társaság választotta rendes, illetve
  tiszteletbeli tagjává, a Magyar Utazók Lexikona pedig Észak-Norvégia
  utazójaként tartja számon. Már ez is elég lenne több élet kitöltésére, de
  még nincs vége! Sovány múzeumi fizetését ugyanis már pályájának elején,
  Kolozsvárott újságírással egészítette ki: színházkritikától vezércikkig
  mindent írt. Később is, egész életén át cikkezett napilapokban,
  folyóiratokban, a tudomány dolgairól éppúgy, mint a közélet idoszerű
  kérdéseiről. Könyveit, cikkeit maga látta el rajzaival, illusztrációval.
  Hihetetlen energiájú és munkabírású ember volt, de akkor is felmerül a
  kérdés: hogy illeszkedik ebbe a szédületes életútba Szeged városa?
  Egyszerű a válasz: meghalt Kállay Ödön, a szegedi második választókerület
  képviselője, Kossuth Lajos pedig Herman Ottót ajánlotta az
  alsóvárosiaknak. Életrajzírója, Lambrecht Kálmán meséli, hogy amikor a
  szegediek küldöttsége megjelent Pesten Herman Ottónál, hogy menne velük
  programbeszédét megtartani, Herman — nála nem szokatlan pénzszűkében lévén
  — elment barátjához, Szily Kálmánhoz, s elpanaszolta neki, hogy nincs egy
  fityingje sem, hogy menjen le így kortesútra. Szily adott neki kölcsön 35
  forintot. „Amikor Herman Szegedről a mandátummal a zsebében visszakerült —
  még tizenhét forintot visszahozott belőle. Azóta se került a parlamentbe
  ilyen tiszta mandátum.” Ezzel kezdődött Herman Ottó parlamenti szereplése
  Szeged képviseletében, és tartott nyolc éven át, 1887. június 17-ig. De
  mit is csinált Herman a magyar Parlamentben? Felszólalt a nemzetiségi
  kérdésben, a zsidókérdésben, de szorgalmazta a homoki szőlőtermelést is a
  filoxéra miatt. Ezenkívül a kultúra minden területével foglalkozott:
  sürgette a mezőgazdasági szakoktatást az Alföldön, bírálta a Magyar
  Tudományos Akadémia és az egyetemek munkáját. 1886- ban a pesti jogi
  karról megállapította, hogy öt egyetemi tanár még sosem írt tudományos
  értekezést, kettő pedig még csak hírlapi cikkecskét sem. Követelte is,
  hogy az egyetemi tanári kinevezésnek a tudományos értekezések színvonala,
  tartalmi értéke legyen a feltétele. És végül Herman Ottó nagyon sokszor
  foglalt állást az egyetem Szegedre való telepítésének ügyében. Mint
  képviselő, gyakran megfordult Szegeden. Megtartotta szokásos pünkösdi
  választói beszámolóját, járt Tápén megnézni a gyékényfonást.
  Képviselőválasztási veresége után sem szakadt meg a kapcsolata Szegeddel:
  1894-ben például részt vett itt népgyűlésen, színházi előadáson, lakomán.
  1895-ben (ekkor már hatvan éves) kétszer is megfordult Szegeden: Madarász
  Viktorral, a Nemzeti Múzeum madártani osztályának munkatársával jött ide
  néprajzi gyűjtésre, majd júliusban egyedül jött vissza. Rengeteg tanyai
  specialitást vásárolt össze: tarhonyáskavaró-kanalat, rühelőtartót,
  botokat, bicskákat, kampósszögeket. Közben levelezett Tömörkény Istvánnal
  a pásztorélet dolgában, majd 1899-ben szintén kétszer jött Szegedre.
  Augusztus 20- án ünnepelte negyedszázados fennállását az alsóvárosi
  népkör, erre hívták meg. Itt az esti banketten beszédet is mondott:
  visszavonult, úgymond, a politikától, s életének utolsó éveit a magyarság
  űsi foglalkozásainak kutatására szenteli. Két hét múlva újra Szegeden
  járt, az országos kiállítást nézte meg, de az nem igazán nyújtott számára
  újat, így inkább kiment Pálfy Antal gazda tanyájára, ott töltötte az
  éjszakát, s közben szorgalmasan jegyzetelt. Utolsó szegedi látogatására
  1904. november 20-án került sor: „Egyetem és nemzeti szellem” címmel
  tartott előadást a Dugonics Társaság fölolvasóülésén a városháza
  közgyulési termében. Herman Ottó 1914. december 27-én hunyt el Budapesten.
  Hamvait a Kerepesi temetőből 1965-ben áthelyezték Miskolc-Felsőhámor
  temetőjébe, édesapja mellé. Miskolcon szobra, a Szeleta-barlangban
  emléktáblája van, ezenkívül neveztek el róla múzeumot, emlékházat,
  emlékparkot, utcát, gimnáziumot, barlangot, kőfülkét és egykoron a
  szentléleki turistaházat is. Szegeden a róla elnevezett horgászegyesület
  őrzi emlékét, valamint a Dóm tér déli részén megtaláljuk Székely Károly
  által alkotott domborművét is. -Barna Béla`;

  showMoreText = false;

  text = ` A kollégiumunkban strukturált, nagy sávszélességű számítógépes hálózat
  működik. Minden szobában lehetőség van arra (3 végpont), hogy a hallgatók
  saját számítógépeikkel a hálózatra csatlakozzanak, és elérjék az Internetet.
  Nem mindig volt ez így, a kollégiumi hálózat folyamatosan, hosszú évek alatt
  bővült, és gyorsult. Története: "Egyszer volt, hol nem volt 7db PC/XT
  számítógépünk a 401-es szobában, és egy 50Mhz-es 486-os és egy 286-os gépünk
  a külön engedéllyel látogatható 402-es szobában, 1992/93 körül. A JATE
  számítóközpont megajándékozta a Herman Kollégiumot egy 9600bit/s sebességű
  terminál hozzáféréssel, melyet a 402-ben egy 286-os gépen tudtunk "élvezni".
  A következő tanév elején, még a gólyák érkezése előtt Köteles Karcsival
  nekiálltunk a 401-es és 402-es szobákban számítógép-hálózatot építeni.
  Sietnünk kellett, mert Karcsi utazott külföldre, így éjszaka is dolgoztunk.
  Ennek a szomszéd szobákban az utolsó vizsgákra készülők nagyon örültek.
  1993-ban a Mikulás hozott egy (finoman szólva nem teljesen fehér) Novell
  Netware 3.11 szervert, amit egy 286-os gépre raktunk. Ez a szerver kezdte
  kiszolgálni a 401-ben lévő gépeket: innen indultak a szokásos programok:
  Windows 3.1, Word 6.0 for DOS, Word 2.0 for Windows, Excel 4.0 for Windows,
  és még ami ráfért a szerverben lévő 300MB-os winchesterre. 1994-ben a
  9600bit/s terminál kapcsolatunk átalakult 19200bit/s ethernet bridge
  kapcsolatra, mely egyenesen a számítóközpont szívével kötött össze
  bennünket. Ettől kezdve volt a 401-es szobában is DECNET és TCP/IP hálózat.
  Ez már internet volt, persze www még sehol. Ekkor jött a kísértés: szerettük
  volna a hálózat adta előnyöket a saját szobáinkban is kihasználni.
  Igazgatónőt sikerült rávenni a fejlesztésre, hogy egy fiú- és egy
  lányszintet (ötödik és hatodik emeletet), valamint az igazgatói irodát
  bekábelezzük. Mindent elvállaltunk, csak hogy nyáron elkezdhessük a munkát:
  falat, födémet fúrtunk, csatornát építettünk, falirácsot fűrészeltünk,
  szerszámokat hoztunk otthonról, cipeltük a sok kábelcsatornát az új hídon
  keresztül. Éjszaka is dolgoztunk, így fordulhatott elő az, hogy reggel
  igazgatónő keresett minket a csatatérré változtatott szobákban, de
  mindketten aludtunk: Karcsi az ötödiken egy ágyon ülve, én a hatodikon félig
  eldőlve. 1995/96-ban a 19200bit/s ethernet bridge kapcsolatunk először IP
  routeres kapcsolatra változott, később a sebesség 2Megabit/s sebességre
  ugrott fel. A401-ben a számítógépek már a Hermanban fejlesztett BOOT
  EPROM-mal indultak, minden gépen ugyanaz a környezet volt elérhető. Minden
  évben nyáron egy-egy újabb hallgatói szintet kábeleztünk be: ekkor már
  szerszámokat is kaptunk kölcsön a karbantartóktól. Cementet a liftépítőktől
  "szereztünk". Mindig az éppen nyári festésre ítélt szinteket kaptuk meg.
  Persze nemcsak a hálózat bővült, hanem a tartalom is fejlődött: a használt
  szoftverek megújultak, közben kifehéredtek, lett egy slackware linux
  szerverünk is, összenyitottuk a 401-es és 402-es szobát, mert már nem fértek
  el az új gépek, a koli homepage is folyamatosan alakult, elkészült a Herman
  könyvtári kölcsönzésének számítógépesítése is. 1998-ra már 300 felhasználója
  volt a kolis hálózatnak, és sokan részt vettek a tartalom fejlesztésében és
  az ingyenes tanfolyamok tartásában is. Nagy kényelemben éltek a hermanosok.
  Azóta a hálózatos szintekről kikerült hallgatók közül sokkal találkozom
  hálózatból élő cégeknél, és ez nagyon jó érzés. Én csupán a
  számítástechnikáról írtam, de ez csak egy a sok közül, amire szívesen
  visszagondolok a hermanos éveimből. A hálózat és a számítógépek pedig
  boldogan élnek, amíg meg nem halnak." A hálózat fejlesztési ütemei közül a
  legjelentősebb a kimenő sávszélesség bővítése volt, ami 2003. tavaszán
  valósult meg. A kollégium az Egyetem felé jelenleg 100 Mbits/s sávszélességű
  kapcsolattal rendelkezik. A belső hálózat üvegszállal (média-konverter)
  kapcsolódik az egyetemi hálózathoz, és ezen keresztül az akadémiai
  hálózathoz. A külvilág felé ezzel
  sokszorosára bővült a sávszélesség, a szűk keresztmetszetet innentől már a
  belső informatikai struktúra jelentette. A koaxos hálózat „lassú” volt, és
  rengeteg bizonytalanságot hordozott magában (egy-egy lelkes szobatakarítás
  után egész félszinten szűnt meg a net). Gondot okozott az is, hogy a
  fejlesztéseket megelőzően csak néhány szinten volt hálózat. Ezek a szintek
  egy koax/utp média-konverteren keresztül kapcsolódtak a központi switchbe. A
  belső munkálatokat nehezen haladtak. A födémek vastagok voltak, a falak
  itt-ott vasbetonból készültek, a vakolat morzsolódott, a kábelcsatorna alig
  maradt fenn. A fejlesztések eredményeként strukturált UTP hálózatot
  alakítottunk ki: a kábelezés minden félszinten egy switchbe fut össze, és
  ezek a switchek up-linkelnek a központi switchbe (P Procurve 2524). A
  számítógépes hálózat fejlesztésével párhuzamosan a kollégium kábeltévé
  hálózatát is átalakítottuk. A gerinchálózatot 2003-ban építettük ki: minden
  folyosón (félszinten) 8 végződés létesült. A számítógépes hálózat építésével
  egyidejűleg a szobákban is kiépítettük a végződéseket, illetve valamennyi
  közösségi helyiség, a lakások, a porta, az iroda is az új rendszerhez
  csatlakozik. A csillagpontos rendszernek köszönhetően valamennyi végződés
  kitűnő minőségű vételt biztosít. A kollégium kábeltévé hálózatának
  blokk-diagrammja megtekinthető itt. 2004-ben tovább bővült a kollégiumi
  hálózat. A Herman „B” (Fürj utca épület) internet „provider”-e a nagy herman
  lett. A két épület között mikrohullámú adatátviteli kapcsolatot
  létesítettünk, kezdetekben 2,4 GHz-es (Linksys) eszközöket alkalmaztunk –
  nem túl nagy sikerrel -, 2006 őszétől pedig már 5 GHz-es (Mikrotik) eszközök
  üzemelnek. 2004-ben a Nemzeti Kollégiumi Közalapítvány informatikai
  pályázatán a kollégium közel 2 millió Forintos fejlesztési forráshoz jutott,
  amelynek köszönhetően a kollégium számítógépes tanulóközpontja újult meg. A
  számítógépteremben strukturált hálózat épült, és új, korszerű gépek kerültek
  beszerzésre. 2007-ben a fürj utcai kollégiumban is átalakítottuk a belső
  hálózatot, és strukturált UTP hálózatot alakítottunk ki. 2007-ben a nagy
  épületben is befejeződött a hálózat átépítése. A hálózat átépítésében
  közreműködtek: Sógor Zoltán, Kis Bence, Tóth Gábor, Szúnyog Zsolt, Pásztor
  Péter, Bátyai Szabolcs, Földházi Zsolt, Varajti Ferenc, Huszka Krisztián,
  Móczár Gábor, Molnár Péter, Osztrogonác Csaba, Hegedűs Gábor, Simon Attila
  és még sokan mások…`;

  textmegyeri = `Titulusok:
  igazgató: 1982.02.01. - 2004.06.30.,
  nevelőtanár: 2004.07.01. - 2006.02.17.
 | Erdélyi Ágnes: Ancsa | -
  
  Amikor 1972-ben megnyitotta kapuit a Herman Ottó Kollégium, Megyery Árpádnét kollégiumi tanárbak nevezték ki Kozma László igazgató mellé. Kinevezését némi érdektelenség fogadta, hiszen frissen végzett matematika-fizika szakos tanárként került az elsősorban biológushallgatókat elhelyező kollégiumba. Mire fel?- kérdezték. Nem kellett azonban sok időnek eltelni, hogy nyilvánvalóvá váljék, kitűnő volt a választás – megfelelő ember került a megfelelő helyre. Fiatal volt, ambiciózus, a legnagyobb lendülettel vetette bele magát a kollégiumi munkába. Soha nem lankadó kedvvel sürgölődött a Herman Ottó Kollégium mindennapjaiban: a kitüntetett események, ahogy most mondjuk, projektek érdekében csakúgy, mint a sok apró-cseprő, hétköznapi ügyek bonyolításában.

Ne tűnjön frázisank, ha azt hangsúlyozzuk, hogy a Herman Kollégium története szorosan összefonódott a nevével. Írjuk le azt is, hogy – ne szégyelljük -, hogy életét nagyrészt a Herman Kollégiumnak szentelte. Minden reggel már kora reggel beérkezett. Végigjárta az épületet, személyesen ellenőrzött megannyi részletet. Minden porcikájában ismerte, gondozta, szerette a kollégiumot. Irodája egész nap nyitva állt a hallgatók előtt. Kollégisták százai emlékezhettek arra a képre, ahogy ül az újszegedi ligetre néző ablak előtt íróasztalánál, és kedélyesen, sajátos, olykor évődő humorával invitálja őket. Hosszú évekre visszamenően ő maga minden névre emlékezett, minden történetet elraktározott. Legendásan félelmetes memóriája őrizte a Herman teljes történetét.

Az első igazgató, Kozma László professzor méltó örököseként nyerte el 1982-ben az igazgatói címet, melyet 2004-ig viselt és szolgált. Nagyrészt neki köszönheti a Herman, hogy az egyetem egyik legkarakteresebb, legigényesebben működő kollégiumává vált, hogy évtizedek alatt felépült a „Herman jelenség”. Szigorú, a rendet megkövetelő igazgató volt, ezzel együtt teremtett a Hermanban igazi, eleven működő közösséget, barátságos, szeretetteljes légkört. Sokat elárult az Herman szellemiségéről, hogy olyan kollégiumi titkárokat röppentett fel, akikből nem egyszer kiváló tudósok, kutatók, professzorok váltak. Megyery Árpádné – Ancsa, ahogy szólítottuk – óriási tapasztalatokkal rendelkezett a kollégiumi frontokon. Naprakészen ismert mindenféle rendeletet, ilyen-olyan szabályzatot, a tennivalók labirintusát. Nagyon is tiszteltük ezt a fajta tudást, sokmindenhez volt kedve, amihez nekünk nem. Sokat tett a mindenkori kollégiumok érdekeiért – harcos volt, olykor gerilla egyetemi és országos fórumokon.

Megingathatatlan optimistaként, vesztett ügyekben is hittel harcolt, Pedig csüggedésre lett volna oka elégszer. Elnyűhetetlen volt. Már súlyos nagybetegen, még mindig ragaszkodott a jelenléthez, gyűjtögette a tennivalókat, még mindig ott ült íróasztalánál az újszegedi ligetre néző ablak előtt. Várta a kollégistákat.

Szenvedélyesen szeretett kirándulni, utazni. Bejárta Európát, nem olyan régen eljutott az egyiptomi piramisokhoz is. Ekkor sem fáradt el soha. Kifulladásig barangolt a híres helyeken, hajtotta érdeklődése, kíváncsisága, mely nem fogyott el, kitartott élete végégi.

Egyetemi kirándulás, utolsó nap Firenzében. Éjféli óra, már mindenki otthon, elpihent. Mi, ketten egy szobában, szintén elalvás előtt. Hirtelen Ancsa felült, s odafordult: nem megyünk fel a hegyre, elbúcsúzni a várostól? Na, jó, néztem rá kicsit furcsán. Aztán ott álltunk fent, a firenzei éjszakában, ketten, kiét nő a Dávid-szobor mellett, gyanúsan imbolygó árnyak között. Alattunk az Aro folyó és a halhatatlan város – örökre őrzöm ezt a képet.

Ancsa. Akik ismertek, tudják, formátumos egyéniség voltál. Egyszerre fegyelmezett és nagyvonalú, rigorózus, ám szeretni valóan gyengéd. Okos voltál és öntörvényű. Nem vigyáztál magadra – azaz, nagyon is tudtad, mit, miért érdemes. Halálod is majdnem ott ért, ahol otthonra talált, szeretett kollégiumodban.

| Almási Tibor: Megyeri Árpádné emlékezete | - 

Hetek teltek már el azóta, hogy egy késő téli, kora tavaszi hét végén szétszaladt a gyászhír: meghalt Megyery Árpádné, a Szegedi Tudományegyetem Herman Ottó Kollégiumának egykori igazgatója, legendás kollégiumi tanára. Az azóta eltelt kéthavi idő mit sem csillapított a hihetelennek tűnő hír keltette erői döbbeneten. Pedig munkatársai, egyetemi környezete, kollégiumának, diákközössége, előtt régóta nem volt titok súlyos betegsége. Látnunk kellet erői gyengülését, fogyatkozását, küzdelmét a testét gyötrő fájdalmakkal, és mégis akik ismerték nagy küzdő természetét, kilátástalan helyzetekben is állhatatos ellenállását, egyéniségének életigenlő derűjét, vert helyzetekben is mindig reményt ébresztő példáját adta -, most is felül fog kerekedni a bajokon.

Megyery Árpádné a Herman Ottó Kollégium létesítésének kezdte, 1972 óta ezen intézmény szolgálatában működött. Mint frissen végzett matematika-fizika szakos tanár kezdte meg Kozma László egykori igazgató mellett kollégiumi tanári munkásságát. Ők ketten alakították ki a Herman-kollégium jellegzetes, elsősorban TTK-s ízeket hordozó arculatát, legtöbb, azóta hagyománnyá nemesült rendezvényét. Tíz év kollégiumi tanárkodás után ő vette át az igazgatói tisztséget, amelyét, azután 22 éven át töltött be. Irányításával az egyetem Herman Ottó Kollégiuma országosan elhíresült, kitűntető címekkel is többször elismert kollégiummá vált. Vezetése alatt a Herman-kollégium egyszerre hordozott nagyon határozott karakter – amelyet mindig büszke öntudattal képviseltek lakói-, és nagyfokú toleranciát, nyitottságot, befogadó készséget a falai között élő megannyi igazi egyéniség, eredeti tehetség ezernyi eltérő vonása, egyedi árnyalata iránt. Megyery Árpádné számon is tartotta volt kollégistái minden komolyabb teljesítményét, kutatási eredményeiket, életpályájukon elért sikereiket!

Kapcsolata számtalan esetben évtizedeken át fennmaradt a kollégium egykori lakóival. Ahogyan a generációk követték egymást a kollégiumban, Ő úgy volt képes folyamatos megújulásra, megcsontosodottságot semmiben sem árult el magáról. Ha a pedig a helyzet úgy kívánta, szervezésben, igazgatásban, szabályozásban, rendkívüli problémák gyors és határozott megoldásában ugyancsak példaszerű meghatósággal járt el mindig.

Hiányára gondolva az elárvultság fájdalmas érzése keríti ma hatalmában az embert a Herman-kollégium kapcsán. Elvesztésén közvetlen családtagjai mellett mélyen és sokáig bánkódnak közvetlen munkatársai, a szegedi egyetemi társadalom kiterjedt köre, mindenekfölött pedig a gondjukat viselt mai és egykori hermanosok népes tábora.

Emlékét kegyelettel megőrizzük.

`;

  textkozma = `Szomorúan és mély fájdalommal tudatjuk, hogy a Herman Ottó Kollégium első igazgatója, Dr. Kozma László, a Pécsi Tudományegyetem professor emeritusa, a Magyar Tudományos Akadémia doktora életének 81. évében, 2013. április 9-én váratlanul elhunyt.


  Életrajza:
  
  A békési Szegedi Kis István Gimnáziumban érettségizett 1953-ban. Egyetemi tanulmányait a Szegedi Tudományegyetem fizika-matematika szakán végezte 1953-1957 között. 1962-ben egyetemi doktori címet szerzett (Szeged), 1969-ben lett a fizika tudományok kandidátusa (Budapest), 1977-ben a fizika tudományok doktora (Minszk). 1962-1982 között a szegedi József Attila Tudományegyetem oktatója (tanársegéd, adjunktus, docens), 1972-1982 között a szegedi Hermann Ottó kollégium igazgatója. 1982-2003 között a pécsi Janus Pannonius Tudományegyetem egyetemi tanára. A JPTE Tanárképző Karának dékánja 1984-1989 között, a Természettudományi Kar megbízott dékánja 1997-1998-ban. Aktív szerepet vállalt a tanárképző főiskola egyetemmé fejlesztésében, az egyetemi szintű fizika szakos képzés oktatási-kutatási hátterének megteremtésében. 1983-1998 között a JPTE Fizika Tanszék tanszékvezető egyetemi tanára, az impulzus gázlézerek, a lézerspektroszkópiai, ezen belül a lézerindukált fluoreszcencia kutatások megalapozója és vezetője Pécsett. Kutatási területe: molekuláris lumineszcencia elméleti és kísérleti kérdéseinek vizsgálata, hangolható festéklézerek vizsgálata, fizikai módszerek biomedikális és kriminalisztikai alkalmazási lehetőségének vizsgálata. Behatóan foglalkozott a lézerek orvosi alkalmazása során lejátszódó folyamatokkal és az okmánybiztosítással. 1999-től a JPTE TTK FEEFI (később PTE FEEK) tanára, majd 2003-tól professor emeritusa, oktatási-kutatási területe a tudomány-technika-társadalom kapcsolatrendszere.
  
  
  Több mint kétszáz publikáció, könyvek, jegyzetek, szabadalmak főződnek a nevéhez.
  
  
  Kitüntetései:
  Miniszteri dicséret (1967),
  Schmid Rezső-díj (1971),
  Oktatásügy Kiváló Dolgozója (1968, 1974),
  Kiváló Munkáért minisztertanácsi kitüntetés (1979),
  Ifjúságért Érdemérem (1982),
  Pro Universitate Quinqueecclesiensi Emlékérem (1998),
  Nemzetbiztonságért Emlékplakett arany fokozat (1998),
  Tudományos Munkáért Belügyi Emlékérem (2000).`;
}
