import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';
import { ActivatedRoute, Router, } from '@angular/router';

@Component({
  selector: 'app-brinquedo-editar',
  imports: [FormsModule],
  templateUrl: './brinquedo-editar.html',
  styleUrl: './brinquedo-editar.scss',
})
export class BrinquedoEditar {
  brinquedo = signal<BrinquedoModel>({
    id: "",
    modelo: "",
    marca: "",
    preco: "",
    quantidade: ""
  })


  constructor(private activeRoute: ActivatedRoute, private router: Router) {

    const idParaEditar = activeRoute.snapshot.paramMap.get("id");

    const brinquedosString = localStorage.getItem("brinquedos")

    if (brinquedosString === null) {
      alert("Nenhum Brinquedo Cadastrado")
      router.navigate(["/brinquedos"])
      return
    }

    const brinquedos = JSON.parse(brinquedosString) as BrinquedoModel[];

    const brinquedosEncontrados = brinquedos.filter(brinquedo => brinquedo.id === idParaEditar);

    if (brinquedosEncontrados.length === 0) {
      alert("Brinquedo não encontrado");
      router.navigate(["/brinquedos"])
      return;
    }

    this.brinquedo.set(brinquedosEncontrados[0]);

  }

  salvar(): void {

    const brinquedos = this.carregarBrinquedosDoLocalStorage();

    const indiceBrinquedosParaEditar = brinquedos.findIndex(x => x.id === this.brinquedo().id);

    brinquedos[indiceBrinquedosParaEditar].modelo = this.brinquedo().modelo;
    brinquedos[indiceBrinquedosParaEditar].marca = this.brinquedo().marca;
    brinquedos[indiceBrinquedosParaEditar].preco = this.brinquedo().preco;
    brinquedos[indiceBrinquedosParaEditar].quantidade = this.brinquedo().quantidade;


    const brinquedosString = JSON.stringify(brinquedos)
    localStorage.setItem("brinquedos", brinquedosString)

    alert("Produto alterado com sucesso");

    this.router.navigate(["/brinquedos"]);

  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[] {

    const brinquedosString =  localStorage.getItem("brinquedos");

    if(brinquedosString === null) {

      return[];
    }
    return JSON.parse(brinquedosString) as BrinquedoModel[];

  }




}
