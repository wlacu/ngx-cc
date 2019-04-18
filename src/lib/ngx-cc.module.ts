import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxCcComponent } from './ngx-cc.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NumberOnlyDirective } from './directives/number-only/number-only.directive';
import { CcDateComponent } from './cc-date/cc-date.component';
import { FormatDateDirective } from './directives/format-date/format-date.directive';
import { CcCvvComponent } from './cc-cvv/cc-cvv.component';

@NgModule({
  declarations: [
    NgxCcComponent,
    NumberOnlyDirective,
    CcDateComponent,
    FormatDateDirective,
    CcCvvComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    NgxCcComponent,
    CcDateComponent,
    CcCvvComponent,
    NumberOnlyDirective,
    FormatDateDirective
  ]
})
export class NgxCcModule { }
