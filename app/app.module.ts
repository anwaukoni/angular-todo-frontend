import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { PolymerElement } from '@vaadin/angular2-polymer';
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";


@NgModule({
    imports:[ BrowserModule,
              FormsModule,
              HttpModule
            ],
    declarations:[AppComponent,
    PolymerElement('app-header-layout'),
    PolymerElement('app-header'),
    PolymerElement('app-toolbar')
    ],
    bootstrap:[AppComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})

export class AppModule{

}
