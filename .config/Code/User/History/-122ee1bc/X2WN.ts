import { Component, inject, OnInit } from '@angular/core';
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
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  signalData: DataType[] = [] as DataType[];
  signalService = inject(SignalsService)

  

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
