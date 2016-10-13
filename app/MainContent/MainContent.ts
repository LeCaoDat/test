import {Component} from '@angular/core';
import {Teacher} from '../Teacher/Teacher';
import {Student} from '../Student/Student';
import { Angular2DataTableModule } from 'angular2-data-table';
import {
  TableOptions,
  TableColumn,
  ColumnMode
} from 'angular2-data-table';

@Component({
  selector   : 'main-content',
  templateUrl: './MainContent.html',
  styleUrls: ['./MainContent.css'],
  
})
export class MainContent {
    
    teacher: Teacher;
    viewState: number;
    rows = [];

    options = new TableOptions({
      columnMode: ColumnMode.force,
      headerHeight: 50,
      footerHeight: 50,
      rowHeight: 'auto',
      columns: [
        new TableColumn({ name: 'ID', sortable: true }),
        new TableColumn({ name: 'Firstname', sortable: true }),
        new TableColumn({ name: 'Lastname', sortable: true }),
        new TableColumn({ name: 'Dob', sortable: true }),
        new TableColumn({ name: 'Average', sortable: true }),
        new TableColumn({ name: 'Status', sortable: true }),
        ]
    });
    
    constructor() {
      this.teacher = new Teacher('Uchiha','Obito', '19/09/1996');
      // this.teacher.addStudent('Lê Cao','Đạt','19/09/1996',7.1,7.9);
      // this.teacher.addStudent('Võ Thị Kim','Hường','09/03/1996',8.0,8.0);
      this.fetch((Student) => {
        this.teacher.students.push(...Student);
      });
      this.rows = this.teacher.students;
    }
  
    fetch(cb) {
      const req = new XMLHttpRequest();
      req.open('GET', '../../resources/data.json');
      req.onload = () => {
        cb(JSON.parse(req.response));
      };
      req.send();
    }

    // sortAverage(): Student[] {
    //   if (this.viewState == 0 ){
    //     this.viewState = 1;
    //     return this.teacher.students.sort((a: Student, b: Student) => b.average - a.average);
    //   }
    //   else if (this.viewState == 1){
    //     this.viewState = 0;
    //     return this.teacher.students.sort((a: Student, b: Student) => a.average - b.average);
    //   }
    // }
}
