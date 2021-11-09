import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgImageSliderModule } from 'ng-image-slider';
import { SliderComponent } from './slider/slider.component';


@NgModule({
	declarations: [
		AppComponent,
		ContactComponent,
		SliderComponent
	],
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		NoopAnimationsModule,
		MatInputModule,
		BrowserAnimationsModule,
		NgImageSliderModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
