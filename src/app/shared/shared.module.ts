import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LemaButtonModule } from './components/button/button.module';
import { LemaInputModule } from './components/input/input.module';
import { MaterialModule } from './modules/material.module';

@NgModule({
	imports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, LemaButtonModule, LemaInputModule],
	declarations: [],
	exports: [CommonModule, MaterialModule, ReactiveFormsModule, FormsModule, LemaButtonModule, LemaInputModule],
})
export class SharedModule {}
