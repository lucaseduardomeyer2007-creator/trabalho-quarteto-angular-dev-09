import { Routes } from '@angular/router';
import { BrinquedoCadastrar } from './brinquedos/brinquedo-cadastrar/brinquedo-cadastrar';
import { BrinquedoListar } from './brinquedos/brinquedo-listar/brinquedo-listar';
import { BrinquedoEditar } from './brinquedos/brinquedo-editar/brinquedo-editar';

export const routes: Routes = [
    { path: "brinquedos/cadastrar", loadComponent: () => BrinquedoCadastrar},
    { path: "brinquedos", loadComponent: () => BrinquedoListar},
    { path: "brinquedos/editar/:id", loadComponent: () => BrinquedoEditar}
];
