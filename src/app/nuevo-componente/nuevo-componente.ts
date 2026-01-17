import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  imports: [],
  templateUrl: './nuevo-componente.html',
  styleUrl: './nuevo-componente.css',
})
export class NuevoComponente {
  titulo = 'Nuevo Componente Angular';
  descripcion = 'Este es un nuevo componente de Angular utilizando TypeScript.';
}
