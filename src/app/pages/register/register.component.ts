import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { userModel } from "src/app/models/user.models";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: userModel;
  rememberUser: false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = new userModel();
  }
  submit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.auth.newUser(this.user).subscribe(
      (resp) => {
        if (this.rememberUser) {
          localStorage.setItem("email", this.user.email);
        }
        this.router.navigateByUrl("/home");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
