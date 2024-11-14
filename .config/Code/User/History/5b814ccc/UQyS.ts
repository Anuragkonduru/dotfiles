import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-input-output',
  standalone: true,
  imports: [FormsModule, ChildComponent],
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export class InputOutputComponent {
  fromParent!: String;
  fromChild!: String;
  gotDataFromChild(event: any) {
    console.log(event);
    this.fromChild = event;
  }
}
