import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { userModel } from "../models/user.models";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey = "AIzaSyD_wrWDac-h6E0elKzvFSLaJJcSUhH_nnk";

  userToken: string;
  constructor(private http: HttpClient) {
    this.readToken();
  }
  logOut() {}
  logIn(user: userModel) {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.http
      .post(`${this.url}signInWithPassword?key=${this.apiKey}`, authData)
      .pipe(
        map((res) => {
          this.saveToken(res["idToken"]);
          return res;
        })
      );
  }
  newUser(user: userModel) {
    const authData = {
      email: user.email,
      password: user.password,
      returnSecureToken: true,
    };
    return this.http
      .post(`${this.url}signUp?key=${this.apiKey}`, authData)
      .pipe(
        map((res) => {
          this.saveToken(res["idToken"]);
          return res;
        })
      );
  }
  private saveToken(idToken: string) {
    this.userToken = idToken;
    localStorage.setItem("token", idToken);
  }
  readToken() {
    if (localStorage.getItem("token")) {
      this.userToken = localStorage.getItem("token");
    } else {
      this.userToken = "";
    }
    return this.userToken;
  }
}
