import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent implements OnInit, OnDestroy {
  ValueSucscriber!: Subscription;
  value!: string;
  count = 0;
  //creating Observable !
  values$ = of('hello', 'hi', 'how', 'are', 'you');
  Observablevalues = Observable.create(() => {
    setTimeout(() => {
      Observer.next(this.count++);
    }, 1000);
  });
  ngOnInit() {
    this.ValueSucscriber = this.values$.subscribe((value: string) => {
      console.log(value);
      this.value = value;
    });
  }
  ngOnDestroy() {
    this.ValueSucscriber.unsubscribe();
  }
}
