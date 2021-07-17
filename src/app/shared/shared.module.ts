import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';

@NgModule({
	imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
	declarations: [],
	exports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
