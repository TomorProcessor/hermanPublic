import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  showMoreszakacs = false;
  showMoreurban = false;
  showMoredummy = false;

  textszakacs = `A kollégium fekvése közlekedési szempontból nagyon jó. 800m-es
  körzetében két-három kisebb bolt is található, CBA, Coop és Spar. Az
  ötös troli és kilencvenes busz által elérhető a Tesco, Aldi, Penny és
  Lidl is. A 60Y és a 67Y-nal elérhető Szőregen a Szeged NOVA
  Bevásárlóközpont, ahol Rossmann drogéria, Pepco és más üzletek
  találhatóak. A Torontál tér tíz perc sétára van a kollégiummal szemben
  lévő ligeten át, ahonnan bármelyik busszal el lehet jutni a Széchenyi
  térre, és átszállni az 1-es és 2-es villamosra, amely az Aradi térre
  visz, ahol a TTIK-s diákok óráinak zöme folyik. A 32-esnek két
  megállója is van a kollégium mellett, amelynek a végállomása közel van
  az Aradi térhez. Ez a járat megáll a Dugonics téren, ahonnan elérhető
  a GTK mindkét épülete gyalog, és a 4-es villamosra átszállva Kecskés
  irányába elérhető a Tanulmányi és Információs Központ.`;

  texturban = `Pár éves kollégiumi lakhatásom során rájöttem néhány dologra a Herman
  Ottó Kollégium kapcsán, amiért ajánlom: Elsőnek említeném, a közösségi
  életet, melyben számos program segít a lakóknak, hogy megismerjék
  egymást. Valamint szórakozzanak, és kicsit kikapcsoljanak az egyetemi
  előadások után. Másodszor, a kollégium rendelkezik műfüves pályával,
  amelyen rendszeresen meghirdetett sporteseményeken lehet részt venni.
  A futás szerelmeseinek szerencséje van, a közelben lévő Erzsébet
  ligetben külön pálya segíti az edzések lebonyolítását. Utolsó sorban
  pedig az elhelyezkedését emelném ki, igaz nincs túl közel számos
  egyetemi épülethez, de ettől függetlenül gyorsan meg lehet őket
  közelíteni, mivel sok, gyakran közlekedő busz van a kollégium
  közvetlen közelében.`;

  textzalan = `Még 2021 őszén jelentkeztem a kollégiumba és már akkor is nyomós indokaim voltak, amik az évek előrehaladtával csak erősödött. Mindenek előtt fontos számomra a testmozgás, amire számos lehetőséget ad a kollégium. Szerintem egy teljesen jó alapfelszereltséggel bíró kondi terem, egy műfüves kisméretű foci/kézi/röplabda pálya, az 5 perc sétára lévő uszoda és a liget adta lehetőségek teljes mértékben kielégítik a sport iránti igényeket. A kollégiumi közösség bár folyamatosan változik, nem veszít a kedvességéből, és családi hangulatából. Külön szimpatikus a közösségi terek és programlehetőségek sokszínűsége. A megközelíthetősége szerintem teljesen rendben van, sűrűn járnak a buszok. Véleményem szerint a szobák berendezése összességében jó. Ezek alapján bátran merem ajánlani az egyetemista ismerőseimnek.`;
}
