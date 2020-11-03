import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { userModel } from "src/app/models/user.models";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: userModel;

  constructor() {}

  ngOnInit() {
    this.user = new userModel();
  }
  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log("form sending");
    console.log(this.user);
    console.log(form);
  }
}
