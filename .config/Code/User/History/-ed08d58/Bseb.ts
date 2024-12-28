import { Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {
  const signalCount: WritableSignal<number> = signal(0);
  const signalMultiplier : Signal<number> = comoputed(() => count() * count())

  constructor() { }
}
