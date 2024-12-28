import {
  computed,
  Injectable,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { DataType } from './interface';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  mainData = signal([]);
  exposedData = computed(() => this.mainData());
  constructor() { }
  
  setData(data: DataType) {
    this.mainData.set(data);
  }
  updateData(data: DataType) {
    this.mainData.update((items)=> return [...items,data])
  }
}
