import { Component, inject } from '@angular/core';
import { ObservableService } from '../../services/observable.service';
import { SignalsService } from '../../services/signals.service';
@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.scss',
})
export class ObservableComponent {
  data: any[] = [];
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
    
  }
}
