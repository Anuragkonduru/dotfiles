import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  NameSubject = new Subject<string>();
  NameBehavioralSubject = new BehaviorSubject<string>();
  constructor() {}
}
