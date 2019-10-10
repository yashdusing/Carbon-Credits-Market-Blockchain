import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = 'World';

  constructor() {
  }

  onChangeText() {
    if (this.text == 'World') {
      this.text = 'Yash';
    } else {
      this.text = 'World';
    }
  }

}


