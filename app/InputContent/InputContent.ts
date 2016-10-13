import {Component} from '@angular/core';
import {Teacher} from '../Teacher/Teacher'
@Component({
  selector   : 'input-content',
  inputs: ['teacher'],
  templateUrl: './InputContent.html',
  styleUrls: ['./InputContent.css'],
})
export class InputContent {
    teacher: Teacher;

    addStudent(firstName: HTMLInputElement, lastName: HTMLInputElement, dayOfBirth: HTMLInputElement, mathematicMark: HTMLInputElement, physicMark: HTMLInputElement){
      if ( firstName.value.trim() == '' || lastName.value.trim() == '' || dayOfBirth.value.trim() == '' || mathematicMark.value.trim() == '' || physicMark.value.trim() == ''){
        window.alert('Please input all field');
      }
      else {
        this.teacher.addStudent(firstName.value,lastName.value,dayOfBirth.value,parseFloat(mathematicMark.value),parseFloat(physicMark.value));
        console.log(`Adding student firstName: ${firstName.value}, lastName: ${lastName.value}, dayOfBirth: ${dayOfBirth.value}, mathematicMark: ${mathematicMark.value}, physicMark: ${physicMark.value}`);
      }
    }
}
