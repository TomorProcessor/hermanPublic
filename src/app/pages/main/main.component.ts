import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  showMoreszakacs = false;
  showMoreurban = false;
  showMoredummy = false;

  onShowszakacs() {
    this.showMoreszakacs = !this.showMoreszakacs;
  }

  onShowurban() {
    this.showMoreurban = !this.showMoreurban;
  }

  onShowdummy() {
    this.showMoredummy = !this.showMoredummy;
  }

  textszakacs = `"A kollégium fekvése közlekedési szempontból nagyon jó. 800m-es
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
  irányába elérhető a Tanulmányi és Információs Központ."`;

  texturban = `"Pár éves kollégiumi lakhatásom során rájöttem néhány dologra a Herman
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
  közvetlen közelében."`;

  textdummy = `"Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text ever
  since the 1500s, when an unknown printer took a galley of type and
  scrambled it to make a type specimen book. It has survived not only
  five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged. It was popularised in the 1960s with
  the release of Letraset sheets containing Lorem Ipsum passages, and
  more recently with desktop publishing software like Aldus PageMaker
  including versions of Lorem Ipsum."`;
}
