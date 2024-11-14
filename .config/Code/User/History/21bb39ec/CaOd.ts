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
  Observablevalues = Observable.create(
    (observer: { next: (arg0: number) => void }) => {
      let count = 0;
      setTimeout(() => {
        observer.next(count);
        count += 1;
      }, 1000);
    }
  );
  ngOnInit() {
    this.ValueSucscriber = this.Observablevalues.subscribe((value) => {
      console.log(value);
      this.value = value;
    });
  }
  ngOnDestroy() {
    this.ValueSucscriber.unsubscribe();
  }
}
