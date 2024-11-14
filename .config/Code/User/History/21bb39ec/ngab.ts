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
  Observablevalues = Observable.create(
    (observer: { next: (arg0: number) => void }) => {
      setTimeout(() => {
        observer.next(this.count++);
      }, 1000);
    }
  );
  ngOnInit() {
    this.ValueSucscriber = this.Observablevalues.subscribe((value: string) => {
      console.log(value);
      this.value = value;
    });
  }
  ngOnDestroy() {
    this.ValueSucscriber.unsubscribe();
  }
}
