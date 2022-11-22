import { NoteServiceService } from './../service/note-service.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss'],
})
export class NotePageComponent implements OnInit {
  editForm!: FormGroup;
  tempNote: any;
  btnControl: boolean = true;

  get title(): FormControl {
    return this.editForm.get('title') as FormControl;
  }

  get content(): FormControl {
    return this.editForm.get('content') as FormControl;
  }

  constructor(
    public noteService: NoteServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.noteService.saveNote(this.editForm.value);
    this.editForm.reset();
  }

  editNote(title: string) {
    const curNode = this.noteService.getNoteByTitle(title);
    this.title.setValue(curNode?.title);
    this.content.setValue(curNode?.content);
    this.tempNote = curNode;
  }

  deleteNote(title: string) {
    console.log('delete: ' + title);
    this.noteService.removeNoteByTitle(title);
    this.editForm.reset();
  }

  revertNote() {
    this.title.reset(this.tempNote.title);
    this.content.reset(this.tempNote.content);
  }

  btnEnable() {
    this.btnControl = true;
  }
}
