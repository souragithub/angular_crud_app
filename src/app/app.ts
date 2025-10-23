import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserModel } from './model/UserModel';


@Component({
  selector: 'app-root',
  imports: [ ReactiveFormsModule ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userForm : FormGroup = new FormGroup({});

  userObj : UserModel = new UserModel();

  userList : UserModel [] = [];

  constructor(){
    this.createForm();
     const data = localStorage.getItem("UserData");
      if(data != null){
        const parseData = JSON.parse(data);
        this.userList = parseData;
      }
  }

  createForm(){
    this.userForm = new FormGroup({
      userId : new FormControl(this.userObj.userId),
      name  : new FormControl(this.userObj.name),
      city  : new FormControl(this.userObj.city),
      address  : new FormControl(this.userObj.address),
      email  : new FormControl(this.userObj.email),
      pin  : new FormControl(this.userObj.pin),
    })

    
  }
    onSave(){
      debugger;
      const data = localStorage.getItem("UserData");
      if(data != null){
        const parseData = JSON.parse(data);
        this.userForm.controls['userId'].setValue(parseData.length + 1);
        this.userList.unshift(this.userForm.value);
      }
      else{
        this.userList.unshift(this.userForm.value);
      }
      localStorage.setItem("UserData",JSON.stringify(this.userList));
    }
}
