import { computed, Injectable, signal, Signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalsService {
  signalCount: WritableSignal<number> = signal(0);
  signalMultiplier : Signal<number> = computed(() => count() * count())

  constructor() { }
}
