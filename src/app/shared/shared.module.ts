import { NgModule } from "@angular/core";

import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        MaterialModule
    ],
    exports: [
        HeaderComponent,
        FooterComponent
    ],
})

export class SharedModule{}