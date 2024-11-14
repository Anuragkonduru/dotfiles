import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  Namesubject = new Subject<string>();
  subjectName = new Subject<string>();
  constructor() {}
}
