import { Component, effect, inject, OnInit } from '@angular/core';
import { DataType } from '../../services/interface';
import { SignalsService } from '../../services/signals.service';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss',
})
export class SignalComponent implements OnInit  {
  signalData: DataType[] = [] as DataType[];
  signalService = inject(SignalsService)
  ngOnInit(): void {
    effect(() => {
      
    })
    this.signalData = this.signalService.exposedData();
  }

  

  set() {
    this.signalService.setData([{
      name: 'anurag',
      location: 'india',
      age: 25
    }]);
  }
  update() {
    this.signalService.updateData([{
      name: 'test2',
      location: 'india',
      age: 28,
    }]);
  }
  clear() {
    this.signalService.clearData();
  }
}
