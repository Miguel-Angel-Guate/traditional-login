import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { userModel } from "src/app/models/user.models";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: userModel = new userModel();
  rememberUser = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    if (localStorage.getItem("email")) {
      this.user.email = localStorage.getItem("email");
      this.rememberUser = true;
    }
  }
  login(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    this.auth.logIn(this.user).subscribe(
      (resp) => {
        if (this.rememberUser) {
          localStorage.setItem("email", this.user.email);
        }
        this.router.navigateByUrl("/home");
      },
      (err) => {
        console.log(err.error.error.message);
      }
    );
  }
}
