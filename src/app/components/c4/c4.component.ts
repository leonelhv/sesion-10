import { Component, Input } from '@angular/core';
interface tarea {
  nombre: string;
  descripcion: string;
}
@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css'],
})
export class C4Component {
  @Input() tareas: tarea[] = [];
}
