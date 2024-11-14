import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  Name: string[] = [''];
  NameSubject = new Subject<string>();
  NameBehavioralSubject = new BehaviorSubject<string>(this.Name[0]);
  constructor() {}

  addName(name) {
    this.Name.push()
  }
  getNameSubject;
  getNameBehavioralSubject;
}
