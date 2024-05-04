import {Component, inject, OnInit} from '@angular/core';
import {MatIconModule} from "@angular/material/icon";
import {NgClass, NgOptimizedImage} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {SearchModalComponent} from "../search-modal/search-modal.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, NgOptimizedImage, NgClass, ReactiveFormsModule, SearchModalComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  public searchFormVisible = false;
  public isSearchModalVisible = false;
  public form!: FormGroup;
  public menuItems = [
    'Ссылки',
    'Контакты',
    'Теги',
    'Просьбы',
    'Избранное',
    'Посещения'
  ];

  private readonly _fb = inject(FormBuilder)

  public ngOnInit() {
    this.initForm();
  }

  public toggleSearchForm(): void {
    this.searchFormVisible = !this.searchFormVisible;
  }

  public resetInput(){
    this.form.reset();
  }

  private initForm(): void {
    this.form = this._fb.group({
      search: ['', Validators.required]
    })

    this.form.get('search')?.valueChanges.subscribe((val) => {
      if(val?.length > 0){
        this.isSearchModalVisible = true;
        return;
      }

      this.isSearchModalVisible = false
    })
  }

}
