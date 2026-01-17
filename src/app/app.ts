import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevoComponente } from "./nuevo-componente/nuevo-componente";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [NuevoComponente],
})
export class App {
  titulo = 'Componente Básico Angular';
  descripcion = 'Este es un componente básico de Angular utilizando TypeScript.';
}
