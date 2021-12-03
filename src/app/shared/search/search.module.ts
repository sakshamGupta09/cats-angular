import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { SearchComponent } from './component/search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatIconModule],
  exports: [SearchComponent],
})
export class SearchModule {}
