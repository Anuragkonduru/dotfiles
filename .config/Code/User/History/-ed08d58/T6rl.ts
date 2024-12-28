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
    console.log(this.#mainData());
  }
  updateData(data: DataType[]) {
    this.#mainData.update((items) => {
      return [...items, ...data];
    });
    console.log(this.#mainData());
  }
  clearData() {
    this.#mainData.set([]);
    console.log(this.#mainData());
  }
}
