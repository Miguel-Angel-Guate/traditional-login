import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { userModel } from "../models/user.models";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private url = "https://identitytoolkit.googleapis.com/v1/accounts:";
  private apiKey = "AIzaSyD_wrWDac-h6E0elKzvFSLaJJcSUhH_nnk";
  //create new user
  // signUp?key=[API_KEY]
  //login
  //signInWithPassword?key=[API_KEY]
  constructor(private http: HttpClient) {}
  logOut() {}
  logIn(user: userModel) {}
  newUser(user: userModel) {}
}
