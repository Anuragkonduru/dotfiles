import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css',
})
export class ObservableComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  // ValueSucscriber!: Subscription;
  // value!: number;
  // //creating Observable !
  // ngOnInit() {
  //   const Observablevalues = new Observable(
  //     (observer: { next: (arg0: number) => void }) => {
  //       let count = 0;
  //       setInterval(() => {
  //         observer.next(count);
  //         count += 1;
  //       }, 1000);
  //     }
  //   );
  //   this.ValueSucscriber = Observablevalues.subscribe((value: number) => {
  //     this.value = value;
  //   });
  // }
  // ngOnDestroy() {
  //   this.ValueSucscriber.unsubscribe();
  // }
}
