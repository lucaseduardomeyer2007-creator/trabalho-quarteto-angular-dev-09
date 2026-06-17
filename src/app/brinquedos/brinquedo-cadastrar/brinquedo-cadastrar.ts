import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrinquedoModel } from '../../models/brinquedo.model';
@Component({
  selector: 'app-brinquedo-cadastrar',
  imports: [FormsModule],
  templateUrl: './brinquedo-cadastrar.html',
  styleUrl: './brinquedo-cadastrar.scss',
})
export class BrinquedoCadastrar {
  brinquedo = signal<BrinquedoModel>({
    id: crypto.randomUUID(),
    modelo: "",
    marca: "",
    preco: "",
    quantidade: ""
  })

  salvar(): void {
    const brinquedos = this.carregarBrinquedosDoLocalStorage();

    brinquedos.push(this.brinquedo());

    const brinquedosSring = JSON.stringify(brinquedos);
    localStorage.setItem("brinquedos", brinquedosSring);

    alert("Brinquedo cadastrado com sucesso");
    this.limparCampos();
  }

  limparCampos(): void {
    this.brinquedo.set({
    id: "",
    modelo: "",
    marca: "",
    preco: "",
    quantidade: ""
    })
  }

  carregarBrinquedosDoLocalStorage(): BrinquedoModel[]{
    const brinquedosSring = localStorage.getItem("brinquedos");

    if (brinquedosSring === null){
      return [];
    }

    return JSON.parse(brinquedosSring) as BrinquedoModel[];
  }
}
