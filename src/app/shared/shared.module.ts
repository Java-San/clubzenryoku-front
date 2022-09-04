import { NgModule } from "@angular/core";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from './material.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        MaterialModule,
        CommonModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
})

export class SharedModule{}