import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, of } from 'rxjs';

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
  //creating Observable !
  values$ = of('hello', 'hi', 'how', 'are', 'you');
  ngOnInit() {
    this.ValueSucscriber = this.values$.subscribe((value: string) => {
      console.log(value);
      this.value = value;
    });
  }
  ngOnDestroy() {
    // this.ValueSucscriber.unsubscribe();
  }
}
