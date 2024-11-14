import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  Name: string[] = ['Initial Value'];
  NameSubject = new Subject<string[]>();
  NameBehavioralSubject = new BehaviorSubject<string[]>([...this.Name]);
  constructor() {}

  addName(name: string) {
    this.Name.push(name);
    this.NameSubject.next([...this.Name]);
    this.NameBehavioralSubject.next([...this.Name]);
  }
  getNameSubject() {
    return this.NameSubject.asObservable();
  }
  getNameBehavioralSubject() {
    return this.NameBehavioralSubject.asObservable();
  }
  popName() {
    this.Name.pop();
    this.NameSubject.next([...this.Name]);
    this.NameBehavioralSubject.next([...this.Name]);
  }
}
