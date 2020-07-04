import { Component, OnInit, Input } from '@angular/core';
import { Isolamentomodel } from 'src/app/service/servicos/isolamentomodel';
import {IsolamentoService} from 'src/app/service/servicos/isolamento.service';
@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  listaservicos:Isolamentomodel[];

<<<<<<< HEAD
=======
   constructor(private isolamentoapi:IsolamentoService) {
>>>>>>> fabeb270c8aab21c2e4dbe107bc0e8ddc8717173

    }

  ngOnInit(): void {
   this.isolamentoapi.servicais().subscribe((lista)=>{
     this.listaservicos =lista;
   })
  }

}
