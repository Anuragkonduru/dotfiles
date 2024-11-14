import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  NameSubject = new Subject<string>();
  NameBehavioralSubject = new Subject<string>();
  constructor() {}
}
