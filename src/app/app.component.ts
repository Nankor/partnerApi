import {Component} from '@angular/core';
import {Location} from '@angular/common';

import {ApiToken} from './models/api_token';
import {TokenService} from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiToken: ApiToken;

  constructor(private tokenService: TokenService, private location: Location) {
    this.apiToken = tokenService.token;
  }

  goBack(): void {
    this.location.back();
  }
}
