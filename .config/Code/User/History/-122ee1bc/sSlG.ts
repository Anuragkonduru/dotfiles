import { Component, effect, inject } from '@angular/core';
import { DataType } from '../../services/interface';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent {
  signalData: DataType[] = [] as DataType[];
  signalService = inject(SignalsService);
  construtor() {
    effect(() => {
      this.signalData = this.signalService.exposedData();
      console.log(this.signalData);
    });
  }

  set() {
    this.signalService.setData([
      {
        name: 'anurag',
        location: 'india',
        age: 25,
      },
    ]);
  }
  update() {
    this.signalService.updateData([
      {
        name: 'test2',
        location: 'india',
        age: 28,
      },
    ]);
  }
  clear() {
    this.signalService.clearData();
  }
}
