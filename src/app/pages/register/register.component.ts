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
        this.router.navigateByUrl("/home");
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
