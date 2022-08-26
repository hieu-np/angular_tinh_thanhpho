import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import { ChipModule } from 'primeng/chip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    ChipModule
  ],
  exports: [
    ButtonModule,
    TableModule,
    ChipModule
  ]
})
export class PrimengModule { }
