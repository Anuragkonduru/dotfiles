import { computed, Injectable, signal } from '@angular/core';
import { DataType } from './interface';

@Injectable({
  providedIn: 'root',
})
export class SignalsService {
  #mainData = signal([] as DataType[]);
  exposedData = computed(() => this.#mainData());
  constructor() {}

  setData(data: DataType[]) {
    this.#mainData.set(data);
  }
  updateData(data: DataType[]) {
    this.#mainData.update((items) => {
      return [...items, ...data];
    });
  }
  clearData() {
    this.#mainData.set([]);
  }
}
