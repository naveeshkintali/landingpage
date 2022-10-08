import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { LoginComponent } from "./login/login.component";
import { BodyComponent } from "./body/body.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        BodyComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
