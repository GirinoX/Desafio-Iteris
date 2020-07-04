import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Isolamentomodel } from 'src/app/service/servicos/isolamentomodel';

@Component({
  selector: 'app-litaservicos',
  templateUrl: './litaservicos.component.html',
  styleUrls: ['./litaservicos.component.css'],
})
export class LitaservicosComponent implements OnChanges {
  @Input() servico: Isolamentomodel;

<<<<<<< HEAD
  location:String;
  name:String;
  photo:String = "https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg";
  services:String[];

  constructor() { }
=======
  location: String;
  name: String;
  photo: String;
  services: String[];
>>>>>>> fabeb270c8aab21c2e4dbe107bc0e8ddc8717173

  constructor() {}

  ngOnChanges(): void {
  if (this.servico != null){

    this.location=this.servico.location;
    this.name=this.servico.name;
    this.photo=this.servico.photo;
    this.services=this.servico.services;
  }
  }

}
