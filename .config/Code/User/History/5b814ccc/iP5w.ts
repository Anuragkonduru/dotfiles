import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { app } from '../../../../server';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [FormsModule,app-child],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export class InputOutputComponent {
  fromParent!: String;
}
