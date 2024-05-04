import {Component, input, OnChanges, SimpleChanges,} from '@angular/core';
import {MatCheckbox} from "@angular/material/checkbox";
import {
  MatDatepicker,
  MatDatepickerInput, MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import {MatFormFieldModule, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-search-modal',
  standalone: true,
  imports: [
    MatDatepickerToggle,
    MatDatepicker,
    MatCheckbox,
    MatLabel,
    MatDatepickerInput,
    MatFormFieldModule,
    MatSuffix,
    MatInput,
    MatDatepickerModule
  ],
  templateUrl: './search-modal.component.html',
  styleUrl: './search-modal.component.scss',
})
export class SearchModalComponent implements OnChanges{

  searchFormValue = input.required<unknown>();
  isFound = false;
  notFound = 'value does not match to any element'

  checkboxTitles = [
    'я участник',
    'в заголовке',
    'строгий поиск'
  ]

  mockData = [
    'Hello',
    'School',
    'Football',
    'FrontEnd',
    'Angular',
    'TileExpert'
  ]

  public ngOnChanges(changes: SimpleChanges) {
    if(changes['searchFormValue'].currentValue){
      this.checkSearchForm();
      this.isFound = true;
    }
  }

  public checkSearchForm(): void{
    if(this.searchFormValue.length > 0){
      const value = this.searchFormValue
      const matches = this.mockData.includes(value.toString().trim())
      if(matches) {
        this.isFound = true;
      }else {

      }
    }
  }
}
