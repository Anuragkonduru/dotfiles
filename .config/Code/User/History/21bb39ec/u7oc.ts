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
  ValueSucscriber: Subscription;
  //creating Observable !
  value = of(...['hello', 'hi', 'how', 'are', 'you']);
  ngOnInit() {}
  ngOnDestroy() {}
}
