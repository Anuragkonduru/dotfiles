import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
    this.setData(['Test1', 'Test2', 'Finaltest']);
  }

  setData(data: any[]) {
    this.obService.setObservableData(data);
  }
}
