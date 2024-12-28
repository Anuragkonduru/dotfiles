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
    console.log(this.exposedData());
  }
  updateData(data: DataType[]) {
    this.#mainData.update((items) => {
      return [...items, ...data];
    });
    console.log(this.#mainData());
    console.log(this.exposedData());
  }
  clearData() {
    this.#mainData.set([]);
    console.log(this.#mainData());
    console.log(this.exposedData());
  }
}
