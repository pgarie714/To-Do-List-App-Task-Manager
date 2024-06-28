import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDatepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { Todo } from 'src/app/interface/todo';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-add-edit-item',
  templateUrl: './add-edit-item.component.html'
})
export class AddEditItemComponent implements OnInit {

  todoForm: FormGroup;
  isEditMode: boolean = false;
  actionBtnText: string = 'Add';
  minDate;
  private todoItem: Todo;

  // Intercept the selectedItem Input and take necessary actions
  @Input()
  set selectedItem(item: Todo) {
    if (item) {
      this.isEditMode = true;
      this.todoItem = item;
      this.resetForm();
      this.populateForm();
    }
  }

  constructor(private todoService: TodoService, private fb: FormBuilder, private dateConfig: NgbDatepickerConfig) {
    const current = new Date();
    this.minDate = {
      year: current.getFullYear(),
      month: current.getMonth() + 1,
      day: current.getDate()
    };

  }

  ngOnInit() {
    this.todoForm = this.createForm();
    this.populateForm();
  }

  /**
   * 
   * Create TODO Form 
   * 
   */
  createForm(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      isCompleted: false,
      date: null
    });
  }

  /**
   * Populate form on the basis of action i.e add or edit
   */
  populateForm() {
    if (this.isEditMode) {
      this.actionBtnText = 'Update';
      this.todoForm.patchValue(this.todoItem);
    } else {
      this.actionBtnText = 'Add';
    }
  }

  resetForm() {
    this.todoForm.reset();
  }


  onSaveNew() {
    let newItem: Todo = this.todoForm.value;
    this.todoService.addNewItem(newItem);
    this.resetForm();
  }

  onSaveEdit() {
    let item: Todo = this.todoForm.value;
    item.id = this.todoItem.id;
    this.todoService.updateItem(item);
    this.onCancel();
  }

  /**
   * Cancel the Editing and reset the form to its original state
   */
  onCancel() {
    this.isEditMode = false;
    this.todoForm = this.createForm();
    this.populateForm();

  }

}
