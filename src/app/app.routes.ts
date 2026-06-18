import { Routes } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquedo-cadastrar/brinquedo-cadastrar';
import { BrinquedoListar } from './brinquedos/brinquedo-listar/brinquedo-listar';

export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedoCadastrar},
    { path: "brinquedos", loadComponent: () => BrinquedoListar}
];
