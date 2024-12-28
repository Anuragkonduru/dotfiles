import { Component, inject } from '@angular/core';
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
  signalService = inject(SignalsService)

  set() {}
  update() {}
  clear() {}
}
