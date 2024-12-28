import { Component, inject } from '@angular/core';
import { ObservableService } from '../../services/observable.service';
import { SignalsService } from '../../services/signals.service';
@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent {
  data: any[] = [];
  signalInput: number = 0;
  signalService = inject(SignalsService);
  constructor(private obService: ObservableService) {}
  ngOnInit(): void {
    this.obService.observableData$.subscribe({
      next: (data) => {
        this.data = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.setData(['test1', 'test2', 'finaltest']);
  }

  setData(data: any[]) {
    this.obService.setObservableData(data);
  }
  updateSignal() {
    this.signalService.signalCount.set(this.signalInput);
  }
}
