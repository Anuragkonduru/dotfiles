import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  mainData = signal([]);
  exposedData = computed(() => this.mainData());
  constructor() { }
  
  setData(data: never[]) {
    this.mainData.set(data);
  }
  updateData(data: any[]) {
    this.mainData.update((items)=> return [...items,data])
  }
}
