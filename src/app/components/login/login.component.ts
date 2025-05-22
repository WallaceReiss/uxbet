import { Component, inject  } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isRegister = false;
  private route = inject(ActivatedRoute);

    constructor() {
    this.route.data.subscribe(data => {
      this.isRegister = data['isRegister'];
    });
  }

}
