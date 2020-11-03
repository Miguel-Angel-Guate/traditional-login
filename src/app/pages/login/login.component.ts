import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { userModel } from "src/app/models/user.models";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: userModel = new userModel();

  constructor() {}

  ngOnInit() {
    this.user = new userModel();
  }
  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    console.log(loginForm);
  }
}
