import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  NameSubject = new Subject<string>();
  NameBehavioralSubject = new BehaviorSubject<string>();
  constructor() {}
}
