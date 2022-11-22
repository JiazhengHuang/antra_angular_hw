import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Note } from '../interface/note.interfaces';

@Injectable({
  providedIn: 'root',
})
export class NoteServiceService {
  initNote: Note = {
    title: 'Click here to edit your first note!',
    content: 'You can edit your content here!',
  };
  private notes: Note[] = [this.initNote];
  private notes$ = new BehaviorSubject<Note[]>(this.notes);
  notelist$ = this.notes$.asObservable();

  constructor() {}

  saveNote(note: any) {
    if (this.isExist(note.title)) {
      const tmp = this.notes.filter(
        (currNote) => currNote.title !== note.title
      );
      this.notes = [...tmp, note];
      this.notes$.next(this.notes);
    } else {
      this.notes = [...this.notes, note];
      this.notes$.next(this.notes);
      alert('Note was saved!');
    }
  }

  isExist(title: string) {
    let res = false;
    this.notes.forEach((note) => {
      if (note.title === title) res = true;
    });
    return res;
  }

  getNoteByTitle(title: string) {
    return this.notes.find((note) => note.title === title);
  }

  removeNoteByTitle(title: string) {
    this.notes = this.notes.filter((currNote) => currNote.title !== title);
    this.notes$.next(this.notes);
  }
}
