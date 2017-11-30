import {Injectable} from '@angular/core';
import {ApiToken} from '../models/api_token';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class TokenService {
  // token: ApiToken = {id: '1f5bcb37bbcb499d814c8f5197e0f8c6', key: 'a76d524a46a4493fb1324fe91e688f92'};
  token: ApiToken = {id: '', key: ''};

  getHttpHeaders(): Object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer token=${this.token.id}, access_key=${this.token.key}`
      })
    };
  }
}
