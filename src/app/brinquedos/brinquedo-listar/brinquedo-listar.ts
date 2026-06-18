import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-brinquedo-listar',
  imports: [FormsModule, RouterLink],
  templateUrl: './brinquedo-listar.html',
  styleUrl: './brinquedo-listar.scss',
})
export class BrinquedoListar {
  brinquedos = signal<BrinquedoModel[]>([]);

  ngOnInit() {
    this.carregarBrinquedosDoLocalStorage();
  }

  carregarBrinquedosDoLocalStorage(): void {
    const brinquedosString = localStorage.getItem("brinquedos");
    if (brinquedosString === null){
      return;
    }

    const brinquedosLista = JSON.parse(brinquedosString) as BrinquedoModel[];

    const brinquedosOrdenados = brinquedosLista.sort((x, y) => x.modelo.localeCompare(y.modelo));
    this.brinquedos.set(brinquedosOrdenados);
  }

  apagar(id : string): void {
    this.brinquedos.update(brinquedos => brinquedos.filter(x => x.id !== id))
    const brinquedosString = JSON.stringify(this.brinquedos());
    localStorage.setItem("brinquedos", brinquedosString);
  }

}
