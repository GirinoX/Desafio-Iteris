import { Component, OnInit, Input } from '@angular/core';
import { Isolamentomodel } from 'src/app/service/servicos/isolamentomodel';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  @Input() servico: Isolamentomodel;


  constructor() { }

  ngOnInit(): void {
  }

}
