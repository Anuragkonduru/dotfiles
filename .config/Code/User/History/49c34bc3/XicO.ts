import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent {
  fromChild!: string;
  @Input() dataFromParent: String | undefined;
  @Output() fromChildEvent = new EventEmitter<String>();
  sendData() {
    this.fromChildEvent.emit(this.fromChild);
  }
}
