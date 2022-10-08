import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    constructor() {}
    loginForm = new FormGroup({
        username: new FormControl(""),
        pwd: new FormControl(""),
    });
    ngOnInit(): void {}
    formSubmit() {
        console.log(this.loginForm.value);
    }
}
