import { Component } from '@angular/core';

export class User {
  constructor(
      public firstname: string,
      public lastname: string,
      public email: string,
      public password: string,
  ) {}
}


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})



export class SignUpComponent {
  user: User = new User("","","","");

  constructor() { }

  onSubmit(): void {
    // form submitted
    console.log(this.user);
  }

  
}


