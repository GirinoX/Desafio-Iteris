import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-litaservicos',
  templateUrl: './litaservicos.component.html',
  styleUrls: ['./litaservicos.component.css']
})
export class LitaservicosComponent implements OnInit {

  location:String;
  name:String;
  photo:String = "https://images.generated.photos/qmdENySIv23bkva-PxTHsoxVbZQdB1Wka0ZPcH5shHY/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yy/XzAzMDE4MzAuanBn.jpg";
  services:String[];

  constructor() { }

  ngOnInit(): void {
  }

}
