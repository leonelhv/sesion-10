import { Component, Output, EventEmitter } from '@angular/core';
interface tarea {
  nombre: string;
  descripcion: string;
}
@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css'],
})
export class C3Component {
  nombre!: string;
  descripcion!: string;

  @Output() responseTarea: EventEmitter<tarea> = new EventEmitter();

  guardar() {
    const newTarea: tarea = {
      nombre: this.nombre,
      descripcion: this.descripcion,
    };
    this.responseTarea.emit(newTarea);
  }
}
