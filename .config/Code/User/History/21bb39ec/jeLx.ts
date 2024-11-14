import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent implements OnInit, OnDestroy {
  ValueSucscriber!: Subscription;
  value!: number;
  //creating Observable !
  ngOnInit() {
Observablevalues
  ngOnDestroy() {
    this.ValueSucscriber.unsubscribe();
  }
}
