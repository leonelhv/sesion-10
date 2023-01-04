import { Component } from '@angular/core';

interface tarea {
  nombre: string;
  descripcion: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  tareas: tarea[] = [
    {
      nombre: 'Aprender Angular',
      descripcion: 'Estudiar formularios',
    },
  ];
  guardarTarea(tarea: tarea) {
    this.tareas.push(tarea);
  }
}
